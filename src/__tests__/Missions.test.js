import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

describe('Mission Element Tests', () => {
  test('if Missions Component Renders in DOM porperly', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(screen.queryByText(/Rockets/)).toBeNull();
  });
  it('renders porperly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
