import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';
import { italic } from 'ansi-colors';

beforeEach(cleanup); // clean the DOM!

jest.mock('../firebase', () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn()
        }))
      }))
    }))
  }
}));

describe('<Checkbox />', () => {
  describe('Success', () => {
    it('renders the task ckeckbox', () => {
      const { queryByTestId } = render(<Checkbox id="1" />);

      expect(queryByTestId('checkbox-action')).toBeTruthy();
    });

    it('render the task checkbox and accept a click ', () => {
      const { queryByTestId } = render(<Checkbox id="1" />);

      expect(queryByTestId('checkbox-action')).toBeTruthy();
      fireEvent.click(queryByTestId('checkbox-action'));
    });
  });
});
