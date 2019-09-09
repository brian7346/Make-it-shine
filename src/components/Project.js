import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { firebase } from '../firebase';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import PropTypes from 'prop-types';

export const Project = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = docId => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };
  return (
    <>
      <span className="sidebar__dot">&#8226;</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => {
                  deleteProject(project.docId);
                }}
              >
                Delete
              </button>
              <span
                onClick={() => {
                  setShowConfirm(!showConfirm);
                }}
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};
