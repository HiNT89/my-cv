import React from "react";

export default function Footer() {
  return (
    <section className="footer_wrapper">
      <a href="#" className="footer_logo">
        <img src="/assets/images/hint.jpg" alt="logo" />
      </a>
      <div className="footer_contact">
        <ul className="footer_social">
          <li className="footer_social_item">0945711801</li>
          <li className="footer_social_item">2001hieunt89@gmail.com</li>
          <li className="footer_social_item">
            <a href="https://github.com/HiNT89">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="footer_social_item">
            <a href="https://www.facebook.com/ntt.starup/">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_line"></div>
      <div className="footer_nav_wraper">
        <ul className="footer_nav">
          <li className="footer_nav_item">
            <a href="#">Home</a>
          </li>
          <li className="footer_nav_item">
            <a href="#about">About</a>
          </li>
          <li className="footer_nav_item">
            <a href="#teach-stack">Teach Stack</a>
          </li>
          <li className="footer_nav_item">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_nav_item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer_description">
        Built by <span>HiNT DEV</span> with Love & Coffee
      </div>
    </section>
  );
}
