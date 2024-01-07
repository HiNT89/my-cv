import LoadingButton from "@mui/lab/LoadingButton";
import { ReactNode } from "react";
interface ButtonLoadingProps {
  isLoading: boolean;
  icon: ReactNode;
  positionIcon: "end" | "start";
  onClick: () => void;
  title: string;
  styles?: {
    [x: string]: any;
  };
  isDisabled?: boolean;
}
const ButtonLoading = (props: ButtonLoadingProps) => {
  const { onClick, icon, positionIcon, title, styles, isLoading, isDisabled } =
    props;

  return (
    <LoadingButton
      size="small"
      onClick={onClick}
      startIcon={positionIcon === "start" ? icon : <></>}
      endIcon={positionIcon === "end" ? icon : <></>}
      loading={isLoading}
      loadingPosition={positionIcon}
      variant="contained"
      disabled={isDisabled}
      sx={{
        backgroundColor: "var(--bgCore)" + "!important",
        padding: "10px 16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "400",
        height: "40px",
        maxHeight: "40px",
        borderRadius: "4px !important",
        opacity: isDisabled ? "0" : 1,

        "&:hover": {
          opacity: "0.9",
          backgroundColor: "var(--bgCore)" + "!important",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
        },
        ...styles,
      }}
    >
      <span> {title}</span>
    </LoadingButton>
  );
};
export default ButtonLoading;
