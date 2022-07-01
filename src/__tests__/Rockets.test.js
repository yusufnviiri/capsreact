/* eslint-disable import/extensions */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import ShowRockets from '../redux/rockets/ShowRockets';

describe('Rocket Element Tests', () => {
  test('Check if Rockets Component Renders in DOM porperly', () => {
    render(
      <Provider store={store}>
        <ShowRockets />

      </Provider>,
    );
    expect(screen.queryByText(/Missions/)).toBeNull();
    expect(screen.queryByText(/Description/)).toBeNull();
  });
  it('renders porperly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ShowRockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
