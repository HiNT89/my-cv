import CSSIcon from "@/components/icons/css";
import FirebaseIcon from "@/components/icons/firebase";
import GitIcon from "@/components/icons/git";
import HTMLIcon from "@/components/icons/html";
import JSIcon from "@/components/icons/javascript";
import MuiIcon from "@/components/icons/mui";
import NextJSIcon from "@/components/icons/nextjs";
import NodeJSIcon from "@/components/icons/nodejs";
import ReactIcon from "@/components/icons/react";
import ReduxIcon from "@/components/icons/redux";
import SASSIcon from "@/components/icons/sass";
import VSCodeIcon from "@/components/icons/vscode";

export default function Technology() {
  return (
    <div className="technology">
      <h2 className="technology_title">My Tech Stack</h2>
      <p className="technology_description">
        Technologies I’ve been working with recently
      </p>
      <div className="technology_list_tech">
        <div className="technology_teach_item">
          <HTMLIcon />
        </div>
        <div className="technology_teach_item">
          <CSSIcon />
        </div>
        <div className="technology_teach_item">
          <JSIcon />
        </div>
        <div className="technology_teach_item">
          <ReactIcon />
        </div>
        <div className="technology_teach_item">
          <ReduxIcon />
        </div>
        <div className="technology_teach_item">
          <SASSIcon />
        </div>
        <div className="technology_teach_item">
          <GitIcon />
        </div>
        <div className="technology_teach_item">
          <VSCodeIcon />
        </div>
        <div className="technology_teach_item">
          <NodeJSIcon />
        </div>
        <div className="technology_teach_item">
          <NextJSIcon />
        </div>
        <div className="technology_teach_item">
          <FirebaseIcon />
        </div>
        <div className="technology_teach_item">
          <MuiIcon />
        </div>
      </div>
    </div>
  );
}
