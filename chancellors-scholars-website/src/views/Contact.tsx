function Contact() {
    return(
        <div className="container contact-main">
            <div className="row">
                <hr />
                <h2>Contact us</h2>
                <p>
                    Have questions? Want to get in touch with us?
                </p>

                <div className="col-sm-6 col-1">
                    <h4>Email</h4>
                    Chancellor's Scholars Program
                    <br />
                    <a href="mailto:ChancellorsScholars@gmail.com">ChancellorsScholars@ucsd.edu</a>
                    <br />
                    <br />
                    Chancellor's Scholars Alliance Student Board
                    <br />
                    <a href="mailto:cscholarsall@ucsd.edu">cscholarsall@ucsd.edu</a>
                    <br />
                    <br />
                    Emeriti Mentor Program
                    <br />
                    <a href="mailto:EmeritiMentor@gmail.com">EmeritiMentor@ucsd.edu</a>
                    <br />
                    <br /> 
                    Chancellor's Scholars Alliance President 
                    <br />
                    <a href="mailto:k7cheung@ucsd.edu"> Keene Cheung </a>
                    <br />
                        <br />Webmasters<br />
                    <a href="mailto:cag013@ucsd.edu"> Carlos Gomez </a>
                    <br />
                    <a href="mailto:fdang@ucsd.edu"> Foster Dang </a>
                </div>
                <div className="col-sm-6 col-2">
                    <h4>Social Media</h4>
                    <div className="social-media">
                        <div className="col-sm-2">
                            <a href="https://www.instagram.com/ucsdcsascholars/" target="_blank" title="Instagram"><img alt="instagram" src="img/instagram_logo.png" /></a>
                        </div>
                        <div className="col-sm-2">
                            <a href="https://www.linkedin.com/organization-guest/school/uc-san-diego-chancellor-s-scholars-program/" target="_blank" title="LinkedIn"><img alt="linkedin" src="img/linkedin_logo.png" /></a>
                        </div>
                        <div className="col-sm-8">
                            {/* placeholder for alignment, replace with actual links when those accounts are set up */}
                        </div>
                    </div>
            </div>
        </div>
      </div>
    );
}

export default Contact;