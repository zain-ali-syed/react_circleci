import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';

import Users from './Users';

global.fetch = require('jest-fetch-mock');

const users = [
  {
    id: '123',
    name: 'Rambo',
    email: 'This@this.com'
  },

  {
    id: '323',
    name: 'Commando',
    email: 'This@rmabo.com'
  }
];

const user = users[0];

afterEach(() => {
  cleanup();
});

test('<Users /> when results load successfully', async () => {
  fetch.mockResponseOnce(JSON.stringify(users));

  const { getByTestId, queryByTestId } = render(<Users />);

  expect(getByTestId('loading')).toBeTruthy();
  await waitForElement(() => getByTestId('title'));
  expect(queryByTestId('loading')).toBeFalsy();

  expect(getByTestId('first_name').textContent).toBe(user.name);
  // expect(getByTestId('email').textContent).toBe(user.email);
});
