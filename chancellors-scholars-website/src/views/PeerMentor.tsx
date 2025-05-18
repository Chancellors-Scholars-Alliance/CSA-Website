function PeerMentor() {
    return(
        <>
            <div className="container csa-board text-center">
                <h2> Peer Mentoring </h2>
                <hr />
                <br />
                <div className="row">
                    <div className="col-sm-12">
                        <p> The Chancellor's Scholars' Alliance Peer Mentoring program aims to connect entering Chancellor's Scholars
                            with older cohorts to create a strong network with other exceptional scholars and provide support during the
                            transition to life at the university. Throughout the year, our peer mentors share advice for academic success,
                            provide guidance for professional development, and participate with their mentees in social events hosted by
                            the Alliance. With the help of our peer mentors, the entering Chancellor's Scholars cohort can make the most
                            of their time here at UCSD and fulfill their scholarly and professional ambitions. </p>
                        <p> You can learn more about this year's peer mentors below. If you want to reach out to any of our peer
                            mentors, you can send the <a href="mailto:cscholarsall@ucsd.edu">Chancellor's Scholars' Alliance an
                            email.</a></p>
                    </div>
                </div>
        
                <div className="peer-mentoring row csa-board text-center">
                    <h1>2023-2024 Mentors</h1>
                    {/* college specific colors */}
                    <img alt="group picture" className="group_photo"
                        src="img/peer-mentoring/2023-2024/peer-mentoring-group.png" />
                </div>
            </div>
    </>
  );
}

export default PeerMentor;