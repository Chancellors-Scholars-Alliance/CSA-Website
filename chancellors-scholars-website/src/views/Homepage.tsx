import { NavLink } from "react-router-dom";
import CSAIcon from "../img/csa-icon-no-letter.png";

const images = import.meta.glob<{default: string}>(
    '../img/homepage/*.{jpg,jpeg,JPG,png}', // Specify the path to headshots and add all relevant file extensions
    { eager: true }
  );

const aboutCollage = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const fileName = path.split('/').pop();
        return [fileName, module.default];
    })
);
function Homepage() {
  return (
    <div>
      {/* background graphic */}
      <div className="container-fluid">
        <div
          className="row lazy main-img-bg container-fluid"
          id="main-bg-img-small"
        >
          <div className="main-title">
            <h1>UC San Diego Chancellor's Scholars Alliance</h1>
          </div>
          <div id="contact-button">
            <NavLink to="/contact">Contact Us!</NavLink>
          </div>
        </div>
      </div>
      {/* second row, mission statement, calendar, etc. */}
      {/* Container spanning width for bg*/}
      <div className="container-fluid" id="home-about-us">
        {/* Container fit to middle width */}
        <div className="container" id="about-card">
            {/* Text column */}
            <div className="text-center" id="about-us-blurb">
                <h2>About Us</h2>
                <p>
                As the Chancellor's Scholar's Alliance, a nonprofit, student run
                organization, we intend to serve as a resource for current and
                future students and to welcome UCSD's newest scholars to our
                community. We seek to equip and empower scholars to become the
                world's next generation of leaders by providing them with
                mentoring networks, bonding socials, and service outreaches in
                order to build unity, teamwork, and purpose.
                </p>
                <NavLink to="/about"> More about us...</NavLink>
            </div>

            {/* Collage column */}
            <div id="collage">  
                <div className="row">
                    <div className="col-sm-6 collage-item text-center">
                        <img 
                            src={aboutCollage["bbq.jpg"]} 
                            alt="about-image-1" 
                            height="100" width="200" />
                    </div>
                    <div className="col-sm-6 collage-item text-center">
                        <img 
                            src={aboutCollage["flowers.jpg"]} 
                            alt="about-image-2" 
                            height="100" width="200" />
                    </div>
                    <div className="col-sm-6 collage-item  text-center">
                        <img 
                            src={aboutCollage["annie keene.jpeg"]} 
                            alt="about-image-3" 
                            height="100" width="200" />
                    </div>
                    <div className="col-sm-6 collage-item  text-center">
                        <img 
                            src={aboutCollage["peer mentor.jpeg"]} 
                            alt="about-image-4" 
                            height="100" width="200" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
