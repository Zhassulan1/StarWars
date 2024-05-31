import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          
          <li className="header-item">
            <Link className="header-item-text" to="/">Home</Link>
          </li>
          
          <li className="header-item">
            <Link className="header-item-text" to="/films">Films</Link>
          </li>
          
          <li className="header-item">
            <Link className="header-item-text" to="/people">People</Link>
          </li>

          <li className="header-item">
            <Link className="header-item-text" to="/starships">Starships</Link>
          </li>
          
          <li className="header-item">
            <Link className="header-item-text" to="/vehicles">Vehicles</Link>
          </li>
          
          <li className="header-item">
            <Link className="header-item-text" to="/species">Species</Link>
          </li>

          <li className="header-item">
            <Link className="header-item-text" to="/planets">Planets</Link>
          </li>

          <li className="header-item">
            <Link className="header-item-text" to="/search">Search</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;