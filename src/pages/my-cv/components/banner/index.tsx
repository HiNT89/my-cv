import { useEffect, useState } from "react";

const TEXT = "Nguyen Trung Hieu";
export function Banner() {
  const [characters, setCharacters] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      if (characters.length === TEXT.length) {
        setCharacters("");
      } else {
        const newCharacters = characters + TEXT[characters.length];
        setCharacters(newCharacters);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="banner">
      <p className="banner_content">
        Hi, <i className="fas fa-laptop"></i>
        <br />
        My name is <span>{characters} |</span>
        <br />I am Front End Developer
      </p>
      <div className="banner_avatar">
        <img src="/assets/images/avatar.jpg" alt="logo" />
      </div>
    </div>
  );
}
