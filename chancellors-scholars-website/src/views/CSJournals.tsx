function CSJournals() {
    return (
      <>
        {/* background graphic w/ updates  */}
        <div className="container-fluid">
          <div className="row lazy" id="main-bg-img" data-original="img/CSP_logo_50.png"
            style={{backgroundImage: "url(./img/CSP_logo_50.png)", backgroundSize: "cover", opacity:"0.8"}}>
            <div className="text-center main-col-single">
              <h1 className="animated fadeIn"
                style={{
                  textShadow: "3px 3px 7px #000, -3px -3px 7px #000, -3px 3px 7px #000, 3px -3px 7px #000",
                  color: "#fff", // optional: helps make it pop
                }}>
                  Chancellor's Scholars Journal
              </h1>
            </div>
          </div>
        </div>
        {/* end graphic + updates */}

        {/* second row, main content about us. */}
        <div className="container">
          <div className="row">
            <p className="journal-intro">
              The Chancellor's Scholars Journal is a biannual newsletter created to share the achievements of the UC San Diego
              Chancellor's Scholars and Emeriti Mentor Programs, and its participants, with the UC San Diego campus and
              community.
            </p>
            <hr />
            <ul className="journal-header"><span>Read the Chancellor's Scholars Journal!</span>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Spring_2024.pdf">CS Journal, Vol. 6, No. 2 (Spring 2024)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Fall_2023.pdf">CS Journal, Vol. 6, No. 1 (Fall
                  2023)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Spring_2023.pdf">CS Journal, Vol. 5, No. 2
                  (Spring 2023)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Fall_2022.pdf">CS Journal, Vol. 5, No. 1 (Fall
                  2022)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Spring_2022.pdf">CS Journal, Vol. 4, No.2
                  (Spring 2022)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Fall_2021.pdf">CS Journal, Vol. 4, No. 1 (Fall
                  2021)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Spring_2021.pdf">CS Journal, Vol. 3, No. 2
                  (Spring 2021)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Fall_2020.pdf">CS Journal, Vol. 3, No. 1 (Fall
                  2020)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Spring_2020.pdf">CS Journal, Vol. 2, No. 2
                  (Spring 2020)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Fall_2019.pdf">CS Journal, Vol. 2, No. 1 (Fall
                  2019)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Spring_2019.pdf">CS Journal, Vol. 1, No. 2
                  (Spring 2019)</a></li>
              <li className="journal-entry"><a target="_blank" href="./journals/CSJ_Fall_2018.pdf">CS Journal, Vol. 1, No. 1 (Fall
                  2018)</a></li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default CSJournals;