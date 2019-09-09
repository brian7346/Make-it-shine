import React from 'react';
import { useProjectsValue } from '../context';
import PropTypes from 'prop-types';

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay
}) => {
  const { projects } = useProjectsValue();
  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li
              key={project.projectId}
              data-testid="project-overlay-action"
              onClick={() => {
                setProject(project.projectId);
                setShowProjectOverlay(false);
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

ProjectOverlay.propTypes = {
  setProject: PropTypes.func,
  showProjectOverlay: PropTypes.func,
  setShowProjectOverlay: PropTypes.func
};
