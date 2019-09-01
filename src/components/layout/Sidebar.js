import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <div className="sidebar__generic">
        <ul>
          <li
            data-testid="inbox"
            className={active === 'inbox' ? 'active' : ''}
            onClick={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
          >
            <span>
              <FaInbox />
            </span>{' '}
            <span>Inbox</span>{' '}
          </li>
          <li
            data-testid="today"
            className={active === 'today' ? 'active' : ''}
            onClick={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
          >
            <span>
              <FaRegCalendar />
            </span>{' '}
            <span>Today</span>{' '}
          </li>
          <li
            data-testid="next-7"
            className={active === 'next-7' ? 'active' : ''}
            onClick={() => {
              setActive('next-7');
              setSelectedProject('NEXT_7');
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>{' '}
            <span>Next 7 days</span>{' '}
          </li>
        </ul>
      </div>

      <div
        className="sidebar__middle"
        onClick={() => {
          setSelectedProject(!showProjects);
        }}
      >
        <span>
          <FaChevronDown className={!showProjects ? 'hidden-projects' : ''} />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};
