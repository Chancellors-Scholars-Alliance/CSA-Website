import {NavLink} from "react-router-dom";
import CSAIcon from '../img/csa-icon-no-letter.png';

function Navbar() {
    return(
        <nav className="navbar navbar-default csa-nav">
            <div className="container-fluid">
            {/*Brand and toggle get grouped for better mobile display */} 
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#csa-top-nav"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <NavLink className="navbar-brand" id="navbar-brand" to="/">
                    <img
                        alt="navbar home icon"
                        width="40" height="40"
                        src={CSAIcon}
                        loading="eager"
                        />
                </NavLink>
            </div>

            {/*Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="csa-top-nav">
                <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/journals">CS Journals</NavLink></li>
                <li><NavLink to="/meet-the-board">Meet the Board</NavLink></li>
                <li><NavLink to="/peer-mentoring"> Peer Mentoring </NavLink></li>
                <li><NavLink to="/spotlight"> Spotlight </NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>{/*/.navbar-collapse */}
          </div>{/*/.container-fluid */}
        </nav>
    )
}

export default Navbar;