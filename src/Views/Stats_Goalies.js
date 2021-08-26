import { useEffect } from 'react';

function Stats_Goalies() {
  const dataFetch = async () => {
    Promise.all([
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/1/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/2/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/3/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/4/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/5/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/6/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/7/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/8/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/9/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/10/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/11/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/12/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/13/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/14/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/15/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/16/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/17/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/18/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/19/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/20/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/21/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/22/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/23/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/24/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/25/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/26/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/27/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/28/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/29/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/30/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/31/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/32/roster`).then(data =>
        data.json()
      ),
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/33/roster`).then(data =>
        data.json()
      ),
    ]).then(console.log);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <h1>Stats - Goalies</h1>
    </div>
  );
}

export default Stats_Goalies;
