import React from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';

export const AddTask = ({
  shouldAddTaskMain = true,
  showShouldMain = false,
  showQuickAddTask
}) => {
  return (
    <>
      <p>Add Task</p>
    </>
  );
};
