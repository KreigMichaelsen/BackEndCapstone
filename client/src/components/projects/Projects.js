import { useState } from "react";
import ProjectList from "./ProjectList";

export default function Projects() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
