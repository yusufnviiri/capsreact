import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMission } from '../../redux/missions/missionsReducer';

const MissionCard = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>{mission.reserved ? <span>Active Member</span> : <span>Not a member</span> }</td>
      <td><button type="button" onClick={() => dispatch(toggleMission(mission.mission_id))}>{(mission.reserved ? 'Leave Mission' : 'Join Mission')}</button></td>
    </tr>
  );
};

MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionCard;