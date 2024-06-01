import { Outlet, Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import search_icon from "../assets/search-icon.png";

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
      <div className="header-container">
        <ul>
            
          <Link to="/">
            <li className="home-icon-container">
              <img className="home-icon" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="logo" />
            </li>
          </Link>
        
          <Link className="header-item" to="/films">
            <li className="header-item-text"> Films</li>
          </Link>
        
          <Link className="header-item" to="/people">
              <li className="header-item-text">People</li>
            </Link>

          <Link className="header-item" to="/starships">
            <li className="header-item-text">Starships</li>
          </Link>
        
          <Link className="header-item" to="/vehicles">
            <li className="header-item-text">Vehicles</li>
          </Link>
        
          <Link className="header-item" to="/species">
            <li className="header-item-text">Species</li>
          </Link>

          <Link className="header-item" to="/planets">
            <li className="header-item-text">Planets</li>
          </Link>

          <li className="search-field-container">
            <div>
              <input 
                className="search-field" 
                type="search" 
                placeholder="Search" 
                onChange={(e) => this.setState({query: e.target.value})} 
                onKeyDown = {(event) =>submitOnEnter(event)}
              />
              
              <button 
                id="btnSearch"
                className="search-button" 
                type="button" 
                onClick={event =>  window.location.href=`/search?query=${this.state.query}`} 
              >
                <img src={search_icon} alt="search-icon" className="search-icon" />
              </button>
              
              <input type="submit" style={{display: 'none'}} />
            </div>
          </li>

        </ul>
      </div>
      <Outlet />
      </>
    )}
};

function submitOnEnter(event) {
  if (event.keyCode == 13){
    document.getElementById('btnSearch').click();
  }
}

export default Header;