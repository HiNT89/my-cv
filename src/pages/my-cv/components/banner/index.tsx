import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Banner() {
  return (
    <div className="banner">
      <p className="banner_content">
        Hi, <FontAwesomeIcon icon={faLaptopCode} />
        <br />
        My nam <span>Hieu</span>
        <br />I am Front End Developer
      </p>
      <div className="banner_avatar">
        <img src="/assets/images/avatar.jpg" alt="logo" />
      </div>
    </div>
  );
}
