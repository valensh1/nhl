import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoalieStatCategories from '../Components/GoalieStatCategories.js';

function Stats_Goalies() {
  const latestSeason = '2021-2022';
  const [goalieStats, setGoalieStats] = useState([]);
  const [goalieFilteredStats, setGoalieFilteredStats] = useState([]);

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

      await setGoalieStats(promises.map(stat => stat.roster));
      setGoalieFilteredStats(
        goalieStats.map(el => {
          return el.position.code === 'G';
        })
      );

      console.log(goalieStats);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`Goalie useEffect ran`);
    statsAPICall(32);
  }, []);

  useEffect(() => {
    const goalieOnlyStats = [];
    goalieStats.map(el => {
      return el?.map(stat => {
        const unfilteredArr = stat?.position?.code === 'G' ? stat : '';
        if (unfilteredArr?.position?.code === 'G') {
          goalieOnlyStats.push(unfilteredArr);
        }
      });
    });
    console.log(goalieOnlyStats);
    setGoalieFilteredStats(goalieOnlyStats);
    // setGoalieFilteredStats(
    //   goalieStats.map(el => {
    //     return el?.map(stat => {
    //       return stat?.position?.code === 'G' ? stat : '';
    //     });
    //   })
    // );
  }, [goalieStats]);

  return (
    <div className='goalie--stats'>
      <h1 className='goalie--stats-h1'>Stats - Goalies</h1>

      <table className='goalie--stats-table'>
        <GoalieStatCategories />
        {/* <h1>{goalieStats[0]?.roster[0].person.fullName}</h1> */}

        {goalieStats.map(goalie => {
          return goalie?.map(el => {
            return (
              <tr>
                <Link>
                  <td className='goalie--stats-player'>
                    {el.position.code === 'G' ? el.person.fullName : ''}
                  </td>
                </Link>
                <td>{el.position.code === 'G' ? latestSeason : ''}</td>
              </tr>
            );
          });
        })}
      </table>
    </div>
  );
}

export default Stats_Goalies;
