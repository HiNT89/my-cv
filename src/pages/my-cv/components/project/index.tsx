import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const DATA = [
  {
    id: 1,
    name: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech_stack: "HTML , JavaScript, SASS, React",
    thumb: "/assets/images/project-1.png",
    domain: "#",
    link_github: "#",
  },
  {
    id: 2,
    name: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech_stack: "HTML , JavaScript, SASS, React",
    thumb: "/assets/images/project-2.png",
    domain: "#",
    link_github: "#",
  },
  {
    id: 3,
    name: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    tech_stack: "HTML , JavaScript, SASS, React",
    thumb: "/assets/images/project-3.png",
    domain: "#",
    link_github: "#",
  },
];
export default function Projects() {
  const [data, setData] = useState(DATA);
  return (
    <div className="projects">
      <h2 className="projects_title">Projects</h2>
      <p className="projects_description">Things I’ve built so far</p>
      <div className="projects_list">
        {data.map((it) => (
          <div key={it.id} className="projects_item_wrapper">
            <div className="projects_item">
              <div className="projects_item_thumb">
                <img src={it.thumb} alt="thumb" />
              </div>
              <div className="projects_item_content">
                <h3>{it.name}</h3>
                <p>{it.description}</p>
                <p>{it.tech_stack}</p>
                <div className="projects_item_direct">
                  <div>
                    <FontAwesomeIcon icon={faLink} />
                    <Link href={it.domain}>Live preview</Link>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faGithub} />
                    <Link href={it.link_github}>View code</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
