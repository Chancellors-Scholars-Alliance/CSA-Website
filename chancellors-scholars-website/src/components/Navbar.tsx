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
                <a className="navbar-brand" href="index.html">Chancellor's Scholars Alliance</a>
            </div>

            {/*Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="csa-top-nav">
                <ul className="nav navbar-nav navbar-right">
                <li><a href="index.html">Home</a></li>
                <li className="active"><a href="events.html">Events</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="journals.html">CS Journals</a></li>
                <li><a href="meettheboard.html">Meet the Board</a></li>
                <li><a href="peer-mentoring.html"> Peer Mentoring </a></li>
                <li><a href="spotlight.html"> Spotlight </a></li>
                <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>{/*/.navbar-collapse */}
          </div>{/*/.container-fluid */}
        </nav>
    )
}

export default Navbar;