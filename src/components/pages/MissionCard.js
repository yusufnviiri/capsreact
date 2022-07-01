import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMission } from '../../redux/missions/missionsReducer';

const MissionCard = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr className="t-row">
      <td className="td-name">{mission.mission_name}</td>
      <td className="td-description">{mission.description}</td>
      <td className="td-status">{mission.reserved ? <span className="td-active">Active Member</span> : <span className="td-not-active">NOT A MEMBER</span> }</td>
      <td className="td-action">
        {(
          mission.reserved
            ? <button className="td-leave" type="button" onClick={() => dispatch(toggleMission(mission.mission_id))}>Leave Mission</button>
            : <button className="td-join" type="button" onClick={() => dispatch(toggleMission(mission.mission_id))}>Join Mission</button>
        )}
      </td>
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