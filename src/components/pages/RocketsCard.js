import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../../redux/rockets/rocketsReducer';

const RocketsCard = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={rocket.flickr_images} alt={rocket.rocket_name + rocket.id} />
      <div>
        <h3>{rocket.rocket_name}</h3>
        <p>
          {rocket.reserved && (<span>[Reserved]</span>)}
          {rocket.description}
        </p>
        <button type="button" onClick={() => dispatch(toggleReservation(rocket.id))}>
          {(rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket')}
        </button>
      </div>
    </div>
  );
};

RocketsCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default RocketsCard;