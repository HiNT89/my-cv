import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  Firestore,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
export interface PayloadProject {
  id?: string | null;
  name: string;
  description: string;
  tech_stack: string;
  thumbs: (string | ArrayBuffer)[];
  domain: string;
  link_github: string;
}
// get order detail
export const getDataProjectDetailService = async (id: string) => {
  let project: PayloadProject | null = null;
  const docSnap = await getDoc(doc(db, "projects", "projects"));
  if (docSnap.exists()) {
    project = docSnap.data().projects.find((it) => it.id === id) ?? null;
  }
  return project;
};
// get order
export const getDataProjectsService = async () => {
  let arrProjects: any[] = [];
  const docSnap = await getDoc(doc(db, "projects", "projects"));
  if (docSnap.exists()) {
    arrProjects = docSnap.data().projects;
  } else {
    // docSnap.data() will be undefined in this case
    arrProjects = [];
  }
  return arrProjects;
};
// delete Product
export const deleteProductService = async (id: string) => {
  let arrProject: any[] = [];
  let isSuccess: false | any[] = false;
  try {
    let lengthBefore: number = 0;

    const docSnap = await getDoc(doc(db, "projects", "projects"));
    if (docSnap.exists()) {
      arrProject = docSnap.data().projects;
      lengthBefore = docSnap.data().projects.length;
    } else {
      // docSnap.data() will be undefined in this case
      lengthBefore = 0;
    }
    let convertData = arrProject.filter((it) => it.id !== id);

    await setDoc(doc(db, "projects", "projects"), { projects: convertData });
    const docSnapAfter = await getDoc(doc(db, "projects", "projects"));
    if (docSnapAfter.exists()) {
      arrProject = docSnapAfter.data().projects;

      if (lengthBefore - 1 == docSnapAfter.data().projects.length) {
        isSuccess = convertData;
      }
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return isSuccess;

  //  delete doc
};
// update Product
export const updateProductService = async (
  payload: PayloadProject,
  file?: File[],
) => {
  if (file.length) {
    const response = await uploadFiles(file);
    if (!response) return false;
    payload.thumbs = [...payload.thumbs, ...response];
  }
  let arrProject: any[] = [];
  let isSuccess: false | any[] = false;
  try {
    const docSnap = await getDoc(doc(db, "projects", "projects"));
    if (docSnap.exists()) {
      arrProject = docSnap.data().projects;
    }
    let convertData = {
      projects: arrProject.map((it) => (it.id === payload.id ? payload : it)),
    };

    await setDoc(doc(db, "projects", "projects"), convertData);
    isSuccess = convertData.projects;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return isSuccess;
};
// project
// export const uploadFiles = async (files: File[]) => {
//   const uploadPromises = await Promise.all(
//     files.map((it: File) => {
//       const storageRef = ref(storage, "thumb-cv/" + it.name);
//       // Create file metadata including the content type
//       /** @type {any} */
//       const metadata = {
//         contentType: "image/png",
//       };
//       // Upload the file and metadata
//       const uploadTask = uploadBytesResumable(storageRef, it, metadata);
//       return getDownloadURL(uploadTask.snapshot.ref).then(
//         (downloadURL) => downloadURL,
//       );
//     }),
//   );
//   if (uploadPromises.some((it) => !it)) return false;
//   return uploadPromises;
// };
export const uploadFiles = async (files: File[]) => {
  const promises = files.map(async (file) => {
    const storageRef = ref(storage, `thumb-cv/${file.name}`);
    await uploadBytesResumable(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  });

  const urls = await Promise.all(promises);
  return urls;
};
export const createProject = async (payload: PayloadProject, file: File[]) => {
  if (file.length) {
    const response = await uploadFiles(file);
    if (!response) return false;
    payload.thumbs = response;
  }
  let arrProject: any = [];
  let isSuccess: boolean | any[] = false;

  const id = uuidv4();
  payload.id = id;
  try {
    let lengthBefore: number = 0;

    const docSnap = await getDoc(doc(db, "projects", "projects"));
    if (docSnap.exists()) {
      arrProject = docSnap.data().projects;
      lengthBefore = docSnap.data().projects.length;
    } else {
      // docSnap.data() will be undefined in this case
      lengthBefore = 0;
    }
    let convertData = { projects: [payload, ...arrProject] };

    await setDoc(doc(db, "projects", "projects"), convertData);
    const docSnapAfter = await getDoc(doc(db, "projects", "projects"));
    if (docSnapAfter.exists()) {
      arrProject = docSnapAfter.data().projects;

      if (lengthBefore + 1 == docSnapAfter.data().projects.length) {
        isSuccess = convertData.projects;
      }
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return isSuccess;
};
