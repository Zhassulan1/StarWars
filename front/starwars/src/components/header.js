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
            <Link className="header-item-text" to="/planets">Planets</Link>
          </li>

          <li className="header-item">
            <Link className="header-item-text" to="/search">Search</Link>
          </li>

          {/* <li>
            <Link to="/people">People</Link>
          </li> */}


          {/* <li>
            <Link to="/species">Species</Link>
          </li> */}

          {/* <li>
            <Link to="/starships">Starships</Link>
          </li> */}

          {/* <li>
            <Link to="/vehicles">vehicles</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;