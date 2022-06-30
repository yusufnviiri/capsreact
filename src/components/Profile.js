import { useSelector } from 'react-redux';
import ProfileMissionCard from './pages/ProfileMissionCard';
import ProfilRocketCard from './pages/ProfilRocketCard';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div>
      <h2>My Rockets</h2>
      <ProfilRocketCard myRockets={myRockets} />
      <h2>My Missions</h2>
      <ProfileMissionCard myMissions={myMissions} />
    </div>
  );
};

export default Profile;