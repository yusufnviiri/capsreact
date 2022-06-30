import React from 'react';
import PropTypes from 'prop-types';

const ProfilRocketCard = ({ myRockets }) => (
  <table>
    <tbody>
      {
        myRockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>
              {rocket.rocket_name}
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

ProfilRocketCard.propTypes = {
  myRockets: PropTypes.shape({
    map: PropTypes.func,
    id: PropTypes.number,
    rocket_name: PropTypes.string,
  }).isRequired,
};

export default ProfilRocketCard;