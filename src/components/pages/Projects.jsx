import React from "react";
import { projects } from "../data";
import Card from "../reusable/Card";

function Projects() {
  return (
    <>
      <Card title="Projects" projects={projects}/>
    </>
  );
}

export default Projects;
