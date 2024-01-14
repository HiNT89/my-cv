import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import SlickImage from "./slick-image";
import { getDataProjectsService } from "../../../../service";
import Tooltip from "@mui/material/Tooltip";
import { convertText } from "../../../../utils";
export default function Projects() {
  const [data, setData] = useState([]);
  const handleGetDataProject = useCallback(() => {
    getDataProjectsService().then((res) => {
      setData(res);
    });
  }, []);
  useEffect(() => {
    handleGetDataProject();
  }, []);
  return (
    <div className="projects">
      <h2 className="projects_title">Projects</h2>
      <p className="projects_description">Things I’ve built so far</p>
      <div className="projects_list">
        {data.map((it) => (
          <div key={it.id} className="projects_item_wrapper">
            <div className="projects_item">
              <div className="projects_item_thumb">
                <SlickImage listImg={it.thumbs} />
                {/* <img src={it.thumb} alt="thumb" /> */}
              </div>
              <div className="projects_item_content">
                <h3>{it.name}</h3>
                <Tooltip title={it.description}>
                  <p>{convertText(it.description)}</p>
                </Tooltip>
                <p>{it.tech_stack}</p>
                <div className="projects_item_direct">
                  <div>
                    <i className="fas fa-link"></i>{" "}
                    <Link href={it.domain}>Live preview</Link>
                  </div>
                  <div>
                    <i className="fab fa-github"></i>
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
