import React from 'react';
import PropTypes from 'prop-types';

const ProfileMissionCard = ({ myMissions }) => (
  
  <table className="profil_Table">
    <tbody>
      {
        myMissions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

ProfileMissionCard.propTypes = {
  myMissions: PropTypes.shape({
    map: PropTypes.func,
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
  }).isRequired,
};

export default ProfileMissionCard;