import { Stack } from "@mui/material";
import * as React from "react";
import ButtonCore from "../../../../components/button/button-core";
export interface ProjectPageProps {}

export default function ProjectPage(props: ProjectPageProps) {
  return (
    <Stack direction="column" className="admin-project-wrapper">
      <ButtonCore title="Create project" />
    </Stack>
  );
}
