import { useEffect, useState } from 'react';
import GoalieStatCategories from '../Components/GoalieStatCategories.js';

function Stats_Goalies() {
  const [goalieStats, setGoalieStats] = useState([]);
  const [finalGoalieStats, setFinalGoalieStats] = useState([]);

  const statsAPICall = async count => {
    try {
      const promises = [];
      for (let i = 1; i <= count; ++i) {
        promises.push(
          await fetch(
            `https://statsapi.web.nhl.com/api/v1/teams/${i}/roster`
          ).then(data => data.json())
        );
      }

      await setGoalieStats(promises);
      console.log(goalieStats);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`Goalie useEffect ran`);
    statsAPICall(32);
  }, []);

  return (
    <div>
      <GoalieStatCategories />
      {/* <h1>{goalieStats[0]?.roster[0].person.fullName}</h1> */}

      {goalieStats.map(goalie => {
        return goalie.roster?.map(el => {
          return <h2>{el.position.code === 'G' ? el.person.fullName : ''}</h2>;
        });
      })}
    </div>
  );
}

export default Stats_Goalies;
