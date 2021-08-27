import { useEffect, useState } from 'react';

function Stats_Goalies() {
  const [goalieStats, setGoalieStats] = useState([]);
  const goalieStats2 = [];
  const finalArrayToLoop = [];

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
      await goalieStats2.push(promises);
      await goalieStats2.map(el => {
        finalArrayToLoop.push(el?.roster?.[0].person.fullName);
      });
      console.log(goalieStats2);
      console.log(finalArrayToLoop);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`Goalie useEffect ran`);
    statsAPICall(20);
  }, []);

  return (
    <div>
      <h1>Stats - Goalies</h1>
      <h2>Dude - Goalies</h2>
      <h1>{goalieStats[0]?.roster[0].person.fullName}</h1>
      {goalieStats.map(goalie => {
        return (
          <h3 key={goalie.roster?.[0].person.id}>
            {goalie.roster?.[0].person.fullName}
          </h3>
        );
      })}
    </div>
  );
}

export default Stats_Goalies;
