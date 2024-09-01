import React from "react";
import "./ProjectCard.css"; // Importa tus estilos CSS aquí

function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <div className="project-card">
      <img className="project-image" src={imageUrl} alt={title} />
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
