import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //! MUST IMPORT BrowswerRouter (changing name to just Router by as Router is optional) and Route and Switch

import './sass/main.scss';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Scores from './Views/Scores';
import News from './Views/News';
import Video from './Views/Video';
import Stats from './Views/Stats';
import Fantasy from './Views/Fantasy';
import Shop from './Views/Shop';

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
    <div className='global-container'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/scores'>
            <Scores />
          </Route>

          <Route exact path='/news'>
            <News />
          </Route>

          <Route exact path='/video'>
            <Video />
          </Route>

          <Route exact path='/stats'>
            <Stats />
          </Route>

          <Route exact path='/fantasy'>
            <Fantasy />
          </Route>

          <Route exact path='/shop'>
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
