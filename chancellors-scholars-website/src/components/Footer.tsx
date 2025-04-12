function Footer() {
    return (
        <>
            <div className="bar-divider gray"></div>
            <footer>
                <div className="container">
                <div className="row">
                    <div className="logo col-sm-4">
                    <img className="lazy" alt="csa logo" data-original="img/csa-logo.jpg" src="" />
                    </div>
            
                    <div className="site-map col-sm-4">
                    <h4>Site</h4>
                    <div className="site-links">
                        <div><a href="index.html">Home</a></div>
                        <div><a href="events.html">Events</a></div>
                        <div><a href="about.html">About</a></div>
                        <div><a href="journals.html">CS Journals</a></div>
                        <div><a href="meettheboard.html">Meet the Board</a></div>
                        <div><a href="contact.html">Contact</a></div>
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