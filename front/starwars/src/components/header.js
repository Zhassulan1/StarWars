import { Outlet, Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ""
    }
  }



  render() {
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
              <form>
                <input className="search-field" type="search"  placeholder="Search" onChange={(e) => this.setState({query: e.target.value})} />
                <button className="search-button" type="button" onClick={event =>  window.location.href=`/search?query=${this.state.query}`}>Search</button>
              </form>
              
            </li>

          </ul>
        </nav>

        <Outlet />
      </>
    )
  }
}
;

export default Header;