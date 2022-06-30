import { useSelector } from 'react-redux';
import ProfileMissionCard from './pages/ProfileMissionCard';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div>
     
      <h2>My Missions</h2>
      <ProfileMissionCard myMissions={myMissions} />
    </div>
  );
};

export default Profile;