import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import NoMatch from './components/NoMatch';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  );
}
    
export default App;
