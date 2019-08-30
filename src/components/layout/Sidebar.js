import React from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <div className="sidebar__generic">
        <ul>
          <li data-testid="inbox" className="inbox">
            <span>
              <FaInbox />
            </span>{' '}
            <span>Inbox</span>{' '}
          </li>
          <li data-testid="today" className="today">
            <span>
              <FaRegCalendar />
            </span>{' '}
            <span>Today</span>{' '}
          </li>
          <li data-testid="next-7" className="next-7">
            <span>
              <FaRegCalendarAlt />
            </span>{' '}
            <span>Next 7 days</span>{' '}
          </li>
        </ul>
      </div>

      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">Projects will be here</ul>
    </div>
  );
};
