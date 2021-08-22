import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <ul className='navbar--ul'>
        <li>
          <Link to='/scores' className='navbar--ul-link'>
            Scores
          </Link>
        </li>
        <li>
          <Link to='/news' className='navbar--ul-link'>
            News
          </Link>
        </li>
        <li>
          <Link to='/video' className='navbar--ul-link'>
            Video
          </Link>
        </li>
        <li>
          <Link to='/stats' className='navbar--ul-link'>
            Stats
          </Link>
        </li>
        <li>
          <Link to='/fantasy' className='navbar--ul-link'>
            Fantasy
          </Link>
        </li>
        <li>
          <Link to='/shop' className='navbar--ul-link'>
            Shop
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
