import { useEffect } from 'react';

function Stats_Goalies() {
  const dataFetch = async () => {
    const response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/1/roster`
    );
    const data = await response.json();
    console.log(data);
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
