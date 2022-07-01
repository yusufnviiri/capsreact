import { useSelector } from 'react-redux';
import ProfileMissionCard from './pages/ProfileMissionCard';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);
  // fetch reserved rockets from local storage
  const arr = localStorage.getItem('reserved');
  const arr1 = JSON.parse(arr);
  return (
    <div className="container my_profil">
      <div className="side_card">
        <h2>My Missions</h2>
        <ProfileMissionCard myMissions={myMissions} />
      </div>
      <div className="side_card">
        <h2>My Rockets</h2>

        <table className="profil_Table">
          <tbody>
            {arr1.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.rocket_name}</td>
              </tr>

            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Profile;
