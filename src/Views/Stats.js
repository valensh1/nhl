import { Link } from 'react-router-dom';

function Stats() {
  return (
    <div className='stats'>
      <h1>Statistics</h1>
      <div>
        <ul>
          <li>
            <Link to='/stats/home'>Home</Link>
          </li>
          <li>
            <Link to='/stats/home'>Skaters</Link>
          </li>
          <li>
            <Link to='/stats/home'>Goalies</Link>
          </li>
          <li>
            <Link to='/stats/home'>Teams</Link>
          </li>
        </ul>
      </div>

      <h3>Summary</h3>
      <table>
        <tr>
          <th>Player</th>
          <th>Team</th>
          <th>Season</th>
          <th>GP</th>
          <th>W</th>
          <th>L</th>
          <th>Shots Against</th>
          <th>Saves</th>
          <th>Save %</th>
          <th>GAA</th>
          <th>Shutouts</th>
        </tr>
        <td>John Gibson</td>
        <td>ANA</td>
        <td>2020-2021</td>
        <td>35</td>
        <td>9</td>
        <td>19</td>
        <td>1042</td>
        <td>941</td>
        <td>.903</td>
        <td>2.98</td>
        <td>3</td>
      </table>
    </div>
  );
}

export default Stats;
