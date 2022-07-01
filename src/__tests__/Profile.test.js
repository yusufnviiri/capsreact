import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/Profile';

describe('Display missions element', () => {
  test('Check if Profile Component Renders in DOM properly', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(screen.queryByText(/My Rockets/)).toBeTruthy();
    expect(screen.queryByText(/My Missions/)).toBeTruthy();
  });
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
