import { useState, useEffect } from 'react';
import './sass/styles.scss';
import Navbar from './Components/Navbar';

function App() {
  const [teamData, setTeamData] = useState([]);

  const NHL_API_Call = async () => {
    const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams`);
    const data = await response.json();
    console.log(data);
    setTeamData(data);
  };

  useEffect(() => {
    NHL_API_Call();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>This is the home page</h1>
    </div>
  );
}

export default App;
