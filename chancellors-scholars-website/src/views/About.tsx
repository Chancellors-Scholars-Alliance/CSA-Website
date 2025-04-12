function About() {
  return (
    <div>
      {/* background graphic w/ updates */}
      <div className="container-fluid">
        <div
          className="row lazy"
          id="main-bg-img"
          data-original="resources/2019 MLK Parade.jpg"
          style={{
            backgroundImage: "url('../img/2019 MLK Parade.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center main-col-single">
            <h1 className="animated fadeIn">About Us</h1>
          </div>
        </div>
      </div>
      {/* second row, main content about us */}
      <div className="container" style={{ padding: "25px" }}>
        <div className="row">
          <hr />
          <h2>
            <center>Our Mission Statement</center>
          </h2>
          <br />
          <p>
            As the Chancellor's Scholar's Alliance, a nonprofit, student run
            organization, we intend to serve as a resource for current and
            future students and to welcome UCSD's newest scholars to our
            community. We seek to equip and empower scholars to become the
            world's next generation of leaders by providing them with mentoring
            networks, bonding socials, and service outreaches in order to build
            unity, teamwork, and purpose.
          </p>
          <br />
          <br />
          <p>
            We hope to serve as a group in which students can turn to one
            another for both academic and non-academic support.
          </p>
          <hr />
        </div>
        <p>
          The Chancellor's Scholars Alliance was founded on June 2012, with the
          main goal of offering a place for fellow recipients of the
          Chancellor's Scholars Scholarship to bond, network, and find a
          community of like-minded individuals.
        </p>
        <br />
        <br />
        <p>
          The organization now consists of a board made up of many officers and
          a general body of over 80 Chancellor's Scholars.
        </p>
        <div className="row">
          <hr />
          <h2>
            <center>Who are the Chancellor's Scholars?</center>
          </h2>
          <br />
          <p>
            The Chancellor's Scholars are a group of undergraduate students who
            were awarded the prestigious Chancellor's Scholarship as entering
            freshmen. All Chancellor's Scholars are outstanding students who
            have demonstrated academic excellence, often despite persisting
            hardships.
          </p>
          <br />
          <p>
            For more information about the Chancellor's Scholars Program, see{" "}
            <a href="https://students.ucsd.edu/student-life/involvement/communication-leadership/chancellors-scholars-program.html">
            this link.
            </a>
            <br />
            For information about the Chancellor's Scholarship and its benefits,
            please refer to{" "}
            <a href="https://students.ucsd.edu/finances/financial-aid/types/scholarships/freshmen/chancellors.html">
            this link.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
