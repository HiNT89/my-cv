import { Stack } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
interface ButtonCoreProps {
  onClick?: (value?: any) => void;
  title: string;
  icon?: ReactNode | ReactElement;
  type?: "default" | "bgWhite" | "custom";
  positionIcon?: "end" | "start";
  styles?: {
    [x: string]: any;
  };
  children?: ReactNode;
  disabled?: boolean;
  htmlFor?: string;
}
const ButtonCore = (props: ButtonCoreProps) => {
  const {
    onClick,
    title,
    icon,
    positionIcon = "start",
    styles,
    type = "default",
    children,
    disabled,
    htmlFor,
  } = props;
  let style = {
    backgroundColor: type === "bgWhite" ? "#fff" : "var(--bgCore) ",
    color: type === "bgWhite" ? "var(--bgCore)" : "#fff",
    border: "1px solid var(--bgCore)",
    fontSize: "14px",
    borderRadius: "4px",
    height: "40px",
    maxHeight: "40px",
    padding: title ? "10px 12px 10px 12px" : "10px 12px",
    transition: "all .2 linear",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 4px 5px rgba(168, 168, 168, 0.25)",
      opacity: "0.9",
    },
  };
  if (type === "custom") style = { ...style, ...styles };
  return (
    <Stack
      disabled={disabled}
      direction={positionIcon === "end" ? "row-reverse" : "row"}
      component={htmlFor ? "label" : "button"}
      sx={{ ...style, opacity: disabled ? "0" : 1 }}
      onClick={onClick}
      htmlFor={htmlFor}
    >
      {icon}
      {title}
      {children}
    </Stack>
  );
};
export default ButtonCore;
