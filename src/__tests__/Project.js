import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Project } from '../components/Project';
import { useProjectsValue, useSelectedProjectValue } from '../context';

beforeEach(cleanup);

jest.mock('../firebase', () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          delete: jest.fn(() =>
            Promise.resolve('Never mock firebase, but i did!')
          ),
          update: jest.fn()
        }))
      }))
    }))
  }
}));

jest.mock('../context', () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelecteProject: jest.fn(() => 'INBOX')
  })),
  useProjectsValue: jest.fn(() => ({
    setProjects: jest.fn(),
    projects: [
      {
        name: 'The Date',
        projectId: '1',
        userId: 'sdf23524532fewfwf',
        docId: 'Life is Strange!'
      }
    ]
  }))
}));

describe('<Project />', () => {
  const project = {
    name: 'The Date',
    projectId: '1',
    userId: 'sdf23524532fewfwf',
    docId: 'Life is Strange!'
  };

  describe('Success', () => {
    it('renders our project', () => {
      const { getByText } = render(<Project project={project} />);
      expect(getByText('The Date')).toBeTruthy();
    });

    it('renders the delete overlay and then deletes a project using click', () => {
      const { queryByTestId, getByText } = render(
        <Project project={project} />
      );
      fireEvent.click(queryByTestId('delete-project'));
      expect(
        getByText('Are you sure you want to delete this project?')
      ).toBeTruthy();

      fireEvent.click(getByText('Delete'));
    });

    it('renders the delete overlay and then cancels using click', () => {
      const { queryByTestId, getByText } = render(
        <Project project={project} />
      );
      fireEvent.click(queryByTestId('delete-project'));
      expect(
        getByText('Are you sure you want to delete this project?')
      ).toBeTruthy();

      fireEvent.click(getByText('Cancel'));
    });
  });
});
