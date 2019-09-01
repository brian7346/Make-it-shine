import { collatedTasks } from '../constants';

export const collatedTasksExist = selectedProject => {
  return collatedTasks.find(task => task.key === selectedProject);
};

export const getTitle = (project, projectId) => {
  return project.find(project => project.projectId === projectId);
};

export const getCollatedTitle = (project, key) => {
  return project.find(project => project.key === key);
};

export const generatePushId = (() => {
  const PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

  const lastRandChars = [];

  return function() {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join('');

    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();
