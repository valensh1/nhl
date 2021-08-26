import { Link } from 'react-router-dom';

function StatsCategories() {
  return (
    <>
      <h1 className='stats--header'>Statistics</h1>
      <div className='stats--category-container'>
        <div className='stats--category-links'>
          <ul className='stats--ul'>
            <li className='stats--category-item'>
              <Link to='/stats/home'>Home</Link>
            </li>
            <li className='stats--category-item'>
              <Link to='/stats/skaters'>Skaters</Link>
            </li>
            <li className='stats--category-item'>
              <Link to='/stats/goalies'>Goalies</Link>
            </li>
            <li className='stats--category-item'>
              <Link to='/stats/teams'>Teams</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default StatsCategories;
