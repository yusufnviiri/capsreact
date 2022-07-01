import axios from 'axios';

const GET_MISSIONS = 'space-travelers/redux/GET_MISSIONS';
const TOGGLE_MISSION = 'space-travelers/redux/TOGGLE_MISSION';

const url = 'https://api.spacexdata.com/v3/missions';

const getMissions = (payload) => ({ type: GET_MISSIONS, payload });
export const toggleMission = (payload) => ({ type: TOGGLE_MISSION, payload });

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const missions = [];

  data.forEach((mission) => {
    missions.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  dispatch(getMissions(missions));
};

const changeMissionStatus = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== id) return mission;
    return { ...mission, reserved: !mission.reserved };
  });
  return newState;
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case TOGGLE_MISSION:
      return changeMissionStatus(state, action.payload);
    default:
      return state;
  }
};

export default missionsReducer;
