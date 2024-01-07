import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Dialog from "@mui/material/Dialog";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import { Box, Stack } from "@mui/material";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});
export default function Header() {
  const [modals, setModals] = useState({
    nav: false,
  });
  const handleToggleModal = (key: string, value: Boolean) => {
    setModals((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <section className="header_wrapper">
      <a href="#" className="header_logo">
        <img src="/assets/images/hint.jpg" alt="logo" />
      </a>
      <div className="header_nav_wrapper">
        <ul className="header_nav">
          <li className="header_nav_item">
            <a href="#">Home</a>
          </li>
          <li className="header_nav_item">
            <a href="#about">About</a>
          </li>
          <li className="header_nav_item">
            <a href="#teach-stack">Teach Stack</a>
          </li>
          <li className="header_nav_item">
            <a href="#projects">Projects</a>
          </li>
          <li className="header_nav_item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <ul className="header_social">
          <li className="header_social_item">
            <a href="https://github.com/HiNT89">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="header_social_item">
            <a href="https://www.facebook.com/ntt.starup/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
      <div
        className="nav_mobile"
        onClick={() => {
          handleToggleModal("nav", !modals.nav);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
        <Dialog
          fullScreen
          open={modals.nav}
          onClose={() => {
            handleToggleModal("nav", false);
          }}
          TransitionComponent={Transition}
        >
          <div className="modal-nav-mobile">
            <Box
              className="modal-nav-mobile top"
              onClick={() => {
                handleToggleModal("nav", false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Box>
            <Stack direction="column" width={"100%"}>
              <ul className="header_nav mobile">
                <li className="header_nav_item mobile ">
                  <a href="#">Home</a>
                </li>
                <li className="header_nav_item mobile">
                  <a href="#about">About</a>
                </li>
                <li className="header_nav_item mobile">
                  <a href="#teach-stack">Teach Stack</a>
                </li>
                <li className="header_nav_item mobile">
                  <a href="#projects">Projects</a>
                </li>
                <li className="header_nav_item mobile">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              {/* <ul className="header_social mobile">
                <li className="header_social_item mobile">
                  <a href="https://github.com/HiNT89">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="header_social_item mobile">
                  <a href="https://www.facebook.com/ntt.starup/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul> */}
            </Stack>
          </div>
        </Dialog>
      </div>
    </section>
  );
}
