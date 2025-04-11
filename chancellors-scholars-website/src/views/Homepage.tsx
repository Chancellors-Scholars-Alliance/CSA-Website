function Homepage() {
    return (
        <div>
            {/* background graphic */}
            <div className="container-fluid">
                <div className="main-img-container">
                    <div 
                        className="row lazy main-img-bg" 
                        id="main-bg-img" 
                        style={{ backgroundImage: 'url(img/homepage-background.jpg)' }}
                    >
                        <img className="main-img-board main-img-pres" alt="President" src="img/board/2024-2025/Keene Cheung.JPG" />
                        <img className="main-img-board main-img-sec" alt="Vice President" src="img/board/2024-2025/Kristilynn Effie.jpg" />
                        <img className="main-img-board main-img-sec2" alt="Secretary" src="img/board/2024-2025/Aryanna Ileto.jpeg" />
                        <img className="main-img-board main-img-tres" alt="Treasurer" src="img/board/2024-2025/Grace Carter.jpg" />
                        <img className="main-img-board main-img-tres2" alt="Treasurer" src="img/board/2024-2025/Sirajam Munira.jpg" />
                        <img className="main-img-board main-img-peer" alt="Peer Mentor Chair" src="img/board/2024-2025/Emily Park.JPG" />
                        <img className="main-img-board main-img-peer2" alt="Peer Mentor Chair" src="img/board/2024-2025/Jervic Aquino.jpg" />
                        <img className="main-img-board main-img-web" alt="Social Chair" src="img/board/2024-2025/Andrew Doan.jpg" />
                        <img className="main-img-board main-img-web2" alt="Social Chair" src="img/board/2024-2025/Reynelle Aricheta.jpeg" />
                        <img className="main-img-board main-img-social" alt="Volunteer Chair" src="img/board/2024-2025/Annie Tran.jpeg" />
                        <img className="main-img-board main-img-social2" alt="Volunteer Chair" src="img/board/2024-2025/Desiree Menjivar.jpg" />
                        <img className="main-img-board main-img-senior" alt="Freshman Ambassador" src="img/board/2024-2025/Leyna Thai.jpeg" />
                        <img className="main-img-board main-img-vol" alt="Webmaster" src="img/board/2024-2025/Foster Dang.jpg" />
                        <img className="main-img-board main-img-vol2" alt="Webmaster" src="img/board/2024-2025/Carlos Gomez.jpg" />
                        <img className="main-img-board main-img-media" alt="Publicity Chair" src="img/board/2024-2025/Phuong Nguyen.jpeg" />
                        <img className="main-img-board main-img-large" alt="Publicity Chair" src="img/board/2024-2025/Maria Habashy.jpeg" />
                        <img className="main-img-board main-img-large2" alt="Director at Large" src="img/board/2024-2025/Felicia Gallardo.jpeg" />
                        <img className="main-img-board main-img-fresh" alt="Director at Large" src="img/board/2024-2025/Kaitlyn Tan.jpeg" />
                    </div>
                    <div className="col-sm-3 main-col csa-main-col-1"></div>
                </div>
            </div>

            {/* second row, mission statement, calendar, etc. */}
            <div className="container csa-pitch">
                <div className="row text-center">
                <hr />
                <div style={{width:'75%', margin: 'auto'}}>
                    <span style={{ fontWeight: 'bold', fontSize: '26px' }}>CSA Announcements</span>
                    <br /> 
                    <br />
                    <p><b> Welcome to the official website of the UC San Diego Chancellor's Scholars Association. </b> Keep an eye
                    on this website to see the wonderful events we have planned for the 2024-2025 academic year.
                    </p> 
                    <br />
                    <p> Keep track of our events by adding 
                        <a href="https://calendar.google.com/calendar/embed?src=cscholarsall%40ucsd.edu&ctz=America%2FLos_Angeles"> our calendar 
                        </a> 
                        to your Google calendar!
                    </p>
                </div>
                </div>
                <div className="row">
                <hr />
                <div className="col-sm-5">
                {/*  */}
                <div className="event-col col-sm-12">
                    <h3> Events </h3>
                    <div className="col-sm-4">
                    <p> <b> Location </b> </p>
                    </div>
                    <div className="col-sm-4">
                    <p> <b> Date </b> </p>
                    </div>
                    <div className="col-sm-4">
                    <p> <b> Time </b> </p>
                    </div>
                </div>
                {/* Events listed below */}
                {/*  */}
                

                {/* Use for future events 
                    <div className="event-item col-sm-12">
                    <div className="event-header">
                        <h4> <b> HEADER </b></h4>
                        <div className="col-sm-4">
                        <p> <b> LOCATION </b></p>
                        </div>
                        <div className="col-sm-4">
                        <p> <b> DATE </b> </p>
                        </div>
                        <div className="col-sm-4">
                        <p> <b> TIME </b> </p>
                        </div>
                    </div>
                        <div className="col-sm-12 text-center">
                        <p> DESCRIPTION </p>
                        </div>
                    </div>
                */}
                </div>

                <div className="col-sm-7">
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=cscholarsall%40ucsd.edu&ctz=America%2FLos_Angeles"
                    style={{ border: 0, width: '800px', height: '600px' }}
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Homepage;