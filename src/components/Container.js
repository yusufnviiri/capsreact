import { Routes, Route } from "react-router-dom";
import Missions from "./Missions";
import NoMatch from "./NoMatch";
import Profile from "./Profile";
import RocketsShow from "../redux/rockets/ShowRockets";

function Wrapper() {
  return (
    <Routes>
      <Route path="/" element={<RocketsShow />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  );
}

export default Wrapper;
