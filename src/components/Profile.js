import { useSelector } from 'react-redux';
import ProfileMissionCard from './pages/ProfileMissionCard';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);
  //fetch reserved rockets from local storage
  let arr = localStorage.getItem("reserved");
  let arr1 = JSON.parse(arr);
  return (
    <div className="container my_profil">
      <div className="side_card">
        <h2>My Missions</h2>
        <ProfileMissionCard myMissions={myMissions} />
      </div>
      <div className="side_card">
        <h2>My Rockets</h2>
        {arr1.map((rocket) => {
        return (
          <div key={rocket.id} className="rocketData">
            <h2>{rocket.rocket_name}</h2>
          </div>
        );
      })}      </div>
    </div>
  );
};

export default Profile;