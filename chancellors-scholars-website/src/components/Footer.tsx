import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="bar-divider gray"></div>
            <footer>
                <div className="container">
                <div className="row">
                    <div className="logo col-sm-4">
                    <img className="lazy" alt="csa logo" data-original="img/csa-logo.jpg" />
                    </div>
            
                    <div className="site-map col-sm-4">
                    <h4>Site</h4>
                    <div className="site-links">
                        <div><NavLink to="/">Home</NavLink></div>
                        <div><NavLink to="/events">Events</NavLink></div>
                        <div><NavLink to="/about">About</NavLink></div>
                        <div><NavLink to="/journals">CS Journals</NavLink></div>
                        <div><NavLink to="/meet-the-board">Meet the Board</NavLink></div>
                        <div><NavLink to="/peer-mentoring"> Peer Mentoring </NavLink></div>
                        <div><NavLink to="/spotlight"> Spotlight </NavLink></div>
                        <div><NavLink to="/contact">Contact</NavLink></div>
                    </div>
                    </div>
            
                    <div className="follow col-sm-4">
                    <h4>Follow us!</h4>
                    <div className="social-media">
                        <div className="col-sm-4">
                        <a href="https://www.instagram.com/ucsdcsascholars/" target="_blank" title="Instagram"><img
                            alt="instagram" src="img/instagram_logo.png" /></a>
                        </div>
                        <div className="col-sm-3">
                        <a href="https://www.linkedin.com/organization-guest/school/uc-san-diego-chancellor-s-scholars-program/" target="_blank" title="LinkedIn"><img
                            alt="linkedin" src="img/linkedin_logo.png"/>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row text-center">
                    <p>&copy; 2025 Chancellor's Scholars Alliance</p>
                </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;