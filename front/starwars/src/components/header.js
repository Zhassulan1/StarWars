import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          
          {/* <li>
            <Link to="/films">Films</Link>
          </li>

          <li>
            <Link to="/people">People</Link>
          </li> */}


          {/* <li>
            <Link to="/species">Species</Link>
          </li>

          <li>
            <Link to="/starships">Starships</Link>
          </li>

          <li>
            <Link to="/vehicles">vehicles</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;