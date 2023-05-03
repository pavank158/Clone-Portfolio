import React from 'react';
import {useParams} from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub"
import "../Styles/ProjectDisplay.css"

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
 
    <div className="project">
      <h1>{project.name}</h1> 
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href= "https://github.com/pavank158">
      <GitHubIcon />
      </a> 
    </div>
  );
}

export default ProjectDisplay;