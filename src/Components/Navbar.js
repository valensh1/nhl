import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/scores'>Scores</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/video'>Video</Link>
        </li>
        <li>
          <Link to='/stats'>Stats</Link>
        </li>
        <li>
          <Link to='/fantasy'>Fantasy</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
