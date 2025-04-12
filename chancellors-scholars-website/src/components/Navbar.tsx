import {NavLink} from "react-router-dom";

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
                <a className="navbar-brand"><NavLink to="/">Chancellor's Scholars Alliance</NavLink></a>
            </div>

            {/*Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="csa-top-nav">
                <ul className="nav navbar-nav navbar-right">
                <li><a><NavLink to="/">Home</NavLink></a></li>
                <li><a><NavLink to="/events">Events</NavLink></a></li>
                <li><a><NavLink to="/about">About</NavLink></a></li>
                <li><a><NavLink to="/CS-journals">CS Journals</NavLink></a></li>
                <li><a><NavLink to="/meet-the-board">Meet the Board</NavLink></a></li>
                <li><a><NavLink to="/peer-mentoring"> Peer Mentoring </NavLink></a></li>
                <li><a><NavLink to="/spotlight"> Spotlight </NavLink></a></li>
                <li><a><NavLink to="/contact">Contact</NavLink></a></li>
                </ul>
            </div>{/*/.navbar-collapse */}
          </div>{/*/.container-fluid */}
        </nav>
    )
}

export default Navbar;