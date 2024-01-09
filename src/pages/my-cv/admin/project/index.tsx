import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Stack,
  TextField,
} from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import ButtonCore from "../../../../components/button/button-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import SlickImage from "../../components/project/slick-image";
import { TransitionProps } from "@mui/material/transitions";
import { v4 as uuidv4 } from "uuid";
import {
  PayloadProject,
  createProject,
  deleteProductService,
  getDataProjectDetailService,
  getDataProjectsService,
  updateProductService,
  uploadFiles,
} from "../../../../service";
export interface ProjectPageProps {}
export interface ImageData {
  listImgRes: { id: string; imgName: string | ArrayBuffer }[];
  listFileImg: { file: File; id: string }[];
  listImgPreview: { id: string; url: string | ArrayBuffer }[];
  listChecked: string[];
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const styleInput = {
  padding: "4px 12px !important",
  // border: "1px solid red",
  height: "80px",
};
export default function ProjectPage(props: ProjectPageProps) {
  const [data, setData] = useState<any[]>([]);
  const [openModals, setOpenModals] = useState({
    create: false,
    delete: false,
  });
  const [formData, setFormData] = useState<PayloadProject>({
    id: "",
    name: "",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech_stack: "HTML , JavaScript, SASS, React",
    thumbs: [],
    domain: "#",
    link_github: "#",
  });
  const [imageData, setImageData] = useState<ImageData>({
    listImgRes: [],
    listFileImg: [],
    listImgPreview: [],
    listChecked: [],
  });
  // call data
  const handleGetDataProject = useCallback(() => {
    getDataProjectsService().then((res) => {
      setData(res);
    });
  }, []);
  const handleOnChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnChangeFile1 = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (
      (event.target as HTMLInputElement).files &&
      (event.target as HTMLInputElement).files.length
    ) {
      const files = event.target.files;

      // Create an array to store image previews

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const id = uuidv4();
        // Use FileReader to read the file as a data URL
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          // Add the data URL to the previews array
          // If all files have been processed, update state
          setImageData((prev) => ({
            ...prev,
            listImgPreview: [
              ...prev.listImgPreview,
              { id, url: e.target.result },
            ],
            listFileImg: [...prev.listFileImg, { id, file }],
          }));
        };
      }
    }
  };
  const onChangeCheckBox = (id: string) => {
    const condition = imageData.listChecked.includes(id);
    const newListChecked = condition
      ? imageData.listChecked.filter((it) => it !== id)
      : [...imageData.listChecked, id];
    setImageData({ ...imageData, listChecked: newListChecked });
  };
  const removeImage = () => {
    const newListImgPreview = imageData.listImgPreview.filter(
      (it) => !imageData.listChecked.includes(it.id),
    );
    const newListImgRes = imageData.listImgRes.filter(
      (it) => !imageData.listChecked.includes(it.id),
    );
    const newListFile = imageData.listFileImg.filter(
      (it) => !imageData.listChecked.includes(it.id),
    );
    setImageData({
      listFileImg: newListFile,
      listChecked: [],
      listImgPreview: newListImgPreview,
      listImgRes: newListImgRes,
    });
  };
  const [keyErrors, setKeyErrors] = useState<string[]>([]);
  const handleUpload = async () => {
    try {
      if (formData.id) {
        const listThumb = imageData.listImgPreview.map((it) => it.url);
        const payload = { ...formData };
        payload.thumbs = listThumb;
        const response = await updateProductService(
          payload,
          imageData.listFileImg.map((it) => it.file),
        );
        if (response) setData(response);
      } else {
        const response = await createProject(
          formData,
          imageData.listFileImg.map((it) => it.file),
        );
        if (response) setData(response);
        setFormData({
          id: "",
          name: "",
          description:
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
          tech_stack: "HTML , JavaScript, SASS, React",
          thumbs: [],
          domain: "#",
          link_github: "#",
        });
      }
      setImageData({
        listImgRes: [],
        listFileImg: [],
        listImgPreview: [],
        listChecked: [],
      });
    } catch (e) {}
  };
  const handleGetDetail = useCallback((id: string) => {
    getDataProjectDetailService(id).then((res) => {
      if (res) {
        setFormData(res);
        setOpenModals((prev) => ({ ...prev, create: true }));
      }
    });
  }, []);
  const handleDelete = useCallback((id: string) => {
    deleteProductService(id).then((res) => {
      if (res) {
        setData(res);
      }
    });
  }, []);
  useEffect(() => {
    handleGetDataProject();
  }, []);
  return (
    <Stack direction="column" className="admin-project-wrapper">
      <ButtonCore
        title="Create project"
        type="custom"
        styles={{ maxWidth: "150px", marginLeft: "16px" }}
        onClick={() => {
          setOpenModals((prev) => ({ ...prev, create: true }));
        }}
      />
      <Stack direction={"row"} className="admin-project-content">
        {data.map((it) => (
          <div key={it.id} className="projects_item_wrapper admin">
            <div className="projects_item admin">
              <div className="projects_item_thumb">
                <SlickImage listImg={it.thumbs} />
              </div>
              <div className="projects_item_content admin">
                <h3>{it.name}</h3>
                <p>{it.description}</p>
                <p>{it.tech_stack}</p>
                <div className="projects_item_direct admin">
                  <div
                    onClick={() => {
                      setOpenModals((prev) => ({ ...prev, delete: true }));
                      setFormData(it);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                  <div
                    onClick={() => {
                      handleGetDetail(it.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Stack>
      {/* modal create */}
      <Dialog
        fullScreen
        open={openModals.create}
        onClose={() => {
          setOpenModals((prev) => ({ ...prev, create: false }));
        }}
        TransitionComponent={Transition}
      >
        <Stack direction="column" className="modal-create-project">
          <Stack direction="row-reverse" className="modal-top">
            <Stack direction={"row"} gap="16px">
              <ButtonCore
                title="Close"
                onClick={() => {
                  setOpenModals((prev) => ({ ...prev, create: false }));
                }}
              />
              <ButtonCore
                title="Save"
                onClick={() => {
                  setOpenModals((prev) => ({ ...prev, create: false }));
                  handleUpload();
                }}
              />
            </Stack>

            <h3>Create project</h3>
          </Stack>
          <Stack direction={"row"} className="center-modal">
            <Box sx={{ ...styleInput, width: "50%" }}>
              <TextField
                error={keyErrors.includes("name")}
                id="standard-error-helper-text"
                label="Name project"
                defaultValue="Hello World"
                helperText={
                  keyErrors.includes("name") ? "Please write name project" : ""
                }
                variant="standard"
                value={formData.name}
                name="name"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleOnChange(name, value);
                }}
                sx={{
                  width: "100%",
                }}
              />
            </Box>
            <Box sx={{ ...styleInput, width: "50%" }}>
              <TextField
                error={keyErrors.includes("domain")}
                id="standard-error-helper-text"
                label="Domain"
                defaultValue="domain"
                helperText={
                  keyErrors.includes("domain") ? "Please write domain" : ""
                }
                variant="standard"
                value={formData.domain}
                name="domain"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleOnChange(name, value);
                }}
                sx={{
                  width: "100%",
                }}
              />
            </Box>
            <Box sx={{ ...styleInput, width: "50%" }}>
              <TextField
                error={keyErrors.includes("link_github")}
                id="standard-error-helper-text"
                label="Link github"
                defaultValue="Hello World"
                helperText={
                  keyErrors.includes("name") ? "Please write link github" : ""
                }
                variant="standard"
                value={formData.link_github}
                name="link_github"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleOnChange(name, value);
                }}
                sx={{
                  width: "100%",
                }}
              />
            </Box>

            <Box sx={{ ...styleInput, width: "50%" }}>
              <TextField
                error={keyErrors.includes("tech_stack")}
                id="standard-error-helper-text"
                label="Tech stack"
                defaultValue="Hello World"
                helperText={
                  keyErrors.includes("name")
                    ? "Please write link tech stack"
                    : ""
                }
                variant="standard"
                value={formData.tech_stack}
                name="tech_stack"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleOnChange(name, value);
                }}
                sx={{
                  width: "100%",
                }}
              />
            </Box>
            <Box sx={{ ...styleInput, width: "100%" }}>
              <TextField
                error={keyErrors.includes("description")}
                id="standard-error-helper-text"
                label="Description"
                defaultValue="Hello World"
                helperText={
                  keyErrors.includes("name")
                    ? "Please write link tech stack"
                    : ""
                }
                variant="standard"
                value={formData.description}
                name="description"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleOnChange(name, value);
                }}
                multiline
                maxRows={4}
                sx={{
                  width: "100%",
                }}
              />
            </Box>

            <Stack direction={"column"} className="list-image-wrapper admin">
              <Stack direction="row" className="list-image-top admin">
                <h4>List image</h4>
                <div className="list-image-top-btns admin">
                  <ButtonCore
                    title="Delete"
                    type="custom"
                    styles={{ maxWidth: "150px", marginLeft: "16px" }}
                    onClick={() => {
                      removeImage();
                    }}
                  />
                  <ButtonCore
                    title="Add photo"
                    type="custom"
                    styles={{
                      maxWidth: "150px",
                      marginLeft: "16px",
                      input: { display: "none" },
                    }}
                    // onClick={() => {
                    //   setOpenModals((prev) => ({ ...prev, create: true }));
                    // }}
                    htmlFor="input-file"
                  >
                    <input
                      type="file"
                      id="input-file"
                      multiple
                      accept="image/png, image/jpeg"
                      onChange={handleOnChangeFile1}
                    />
                  </ButtonCore>
                </div>
              </Stack>
              <Stack direction={"row"} className="list-image-preview admin">
                {imageData.listImgPreview && imageData.listImgPreview.length ? (
                  imageData.listImgPreview.map((it) => (
                    <Stack
                      key={it.id}
                      direction="row"
                      sx={{
                        position: "relative",
                        width: "33.33%",
                        padding: "0px 12px",
                        ">img": {
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                        },
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                      onClick={() => {
                        onChangeCheckBox(it.id);
                      }}
                      className="list-image-preview-item admin"
                    >
                      <input
                        type="checkbox"
                        id={`checkbox-${it.id}`}
                        checked={imageData.listChecked.includes(it.id)}
                        className={`custom-checkbox`}
                      />

                      <img src={typeof it.url === "string" ? it.url : ""} />
                    </Stack>
                  ))
                ) : (
                  <></>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Dialog>
      {/* modal delete */}
      <Dialog
        open={openModals.delete}
        onClose={() => {
          setOpenModals((prev) => ({ ...prev, delete: true }));
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confirm remove project {formData.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonCore
            title="Cancel"
            type="custom"
            styles={{
              maxWidth: "150px",
              marginLeft: "16px",
              background: "#fff",
              border: "1px solid var(--textHover)",
              color: "var(--textHover)",
            }}
            onClick={() => {
              setOpenModals((prev) => ({ ...prev, delete: false }));
            }}
          />
          <ButtonCore
            title="Confirm"
            type="custom"
            styles={{ maxWidth: "150px", marginLeft: "16px" }}
            onClick={() => {
              setOpenModals((prev) => ({ ...prev, delete: false }));
              handleDelete(formData.id);
            }}
          />
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
