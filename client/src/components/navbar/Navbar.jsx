import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="logo">lebobooking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}
