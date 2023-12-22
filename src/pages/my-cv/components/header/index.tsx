import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import ZaloIcon from "@/components/icons/zalo";

export default function Header() {
  return (
    <section className="header_wrapper">
      <a href="#" className="header_logo">
        <img src="/assets/images/hint.jpg" alt="logo" />
      </a>
      <div>
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
    </section>
  );
}
