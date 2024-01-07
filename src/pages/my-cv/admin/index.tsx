import { Box, Stack } from "@mui/material";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import ProjectPage from "./project";
import PDFPage from "./pdf";
const LIST_NAV = [
  { id: 0, name: "Projects", url: "/", component: <ProjectPage /> },
  { id: 0, name: "PDF", url: "/pdf", component: <PDFPage /> },
];
const AdminPage = () => {
  const router = useRouter();
  const [pageContent, setPageContent] = useState("/");
  // const navigate = useNa
  const handleChangePage = (url: string) => {
    setPageContent(url);
  };
  return (
    <Stack direction="row" className="admin-wrapper">
      <Stack direction="column" className="admin-sidebar">
        <Box className="admin-sidebar-top">MY CV</Box>
        <Stack direction="column" className="admin-sidebar-content">
          {LIST_NAV.map((it) => (
            <Box
              onClick={() => handleChangePage(it.url)}
              key={it.id}
              className={
                it.url === pageContent
                  ? "admin-sidebar-content item active"
                  : "admin-sidebar-content item"
              }
            >
              {it.name}
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack direction="column" className="admin-content">
        <Stack direction="row-reverse" className="admin-content-top">
          <Box>Xin chào, ADMIN</Box>
        </Stack>
        {LIST_NAV.find((it) => it.url === pageContent)?.component}
      </Stack>
    </Stack>
  );
};
export default AdminPage;
