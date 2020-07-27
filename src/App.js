import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { projectText } from "./resources/projectCards/projectText";

function App() {
  return projectText.map((project) => {
    return (
      <ProjectCard
        title={project.title}
        description={project.description}
        altDescription={project.altDescription}
        imgSrc={project.imgSrc}
        imgTitle={project.imgTitle}
        altImgSrc={project.altImgSrc}
        altImgTitle={project.altImgTitle}
        gitHubFront={project.gitHubFront}
        gitHubBack={project.gitHubBack}
        frontURL={project.frontURL}
        backURL={project.backURL}
        presentation={project.presentation}
      />
    );
  });
}

export default App;
