// Utilize Vite.js glob bundling/hashing to import headshots
const images = import.meta.glob<{default: string}>(
    '../img/board/2024-2025/*.{jpg,jpeg,JPG,png}', // Specify the path to headshots and add all relevant file extensions
    { eager: true }
  );

const boardHeadshots = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const fileName = path.split('/').pop();
        return [fileName, module.default];
    })
);

function Board() {
    return(
        <div>
            <div className="container csa-board text-center">
                <h2>The CSA Board (2024 - 2025)</h2>

                <div className="row">
                    <hr />
                    
                    {/* President */}
                    <div className="row">
                    <div className="col-sm-6 animated fadeInUp csa-delay-2">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Keene Cheung.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Keene Cheung - President</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Keene, and I am a third-year Revelle student
                        double majoring in ICAM Music and Business Economics. My main
                        hobbies center around music and cooking. I play multiple
                        instruments but primarily the flute. I am super excited and
                        thankful to be given the opportunity to serve as this year's CSA
                        President. I look forward to interacting and working with all of
                        you to create and foster an inclusive community for all of UCSD
                        Chancellor's Scholars.
                        </p>
                    </div>
                    </div>

                    {/* Vice President */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Kristilynn Effie.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Kristilynn Effie - Vice President</h4>
                    <div className="board-desc">
                        <p>
                        My name is KristiLynn Effie, and I am a junior in Sixth college
                        studying Visual Arts-Studio with a minor in Art History and
                        Criticism. Hence my major, in my free time you can find me
                        painting or illustrating – however I also love spending time with
                        family and friends, and catching up over coffee. My professional
                        journey includes roles as a Student Assistant at UCSD's Retirement
                        Resource Center, and Social Media Coordinator alongside serving as
                        this year’s Vice President of the CSA; a title I hold with great
                        pride.
                        </p>
                    </div>
                    </div>
                    </div>

                    {/* Secretary */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Aryanna Ileto.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Aryanna Ileto - Secretary</h4>
                    <div className="board-desc">
                        <p>
                        Hi my name is Aryanna! I’m currently a second year in Marshall
                        college majoring in psychology with a minor in marketing. In my
                        free time I love going to cafes with friends, watching romcoms,
                        traveling, and learning new instruments.
                        </p>
                    </div>
                    </div>

                    {/* Treasurer */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Grace Carter.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Grace Carter - Treasurer</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Grace Carter and I am a second year chemistry
                        major in Marshall college. I plan to go to pharmacy school after
                        undergrad. In my free time I love to dance, go to the beach, sew,
                        and spend time with friends.
                        </p>
                    </div>
                    </div>

                    {/* Treasurer */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Sirajam Munira.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Sirajam Munira - Treasurer</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Sirajam Munira. I am a second-year Marshall
                        student, majoring in International Studies - International
                        Business. Fun fact about me: I love to play tennis and am a
                        perfectionist :)
                        </p>
                    </div>
                    </div>

                    {/* Peer Mentor Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Emily Park.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Emily Park - Peer Mentor Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hi! My name is Emily Park and I'm a third-year student at UCSD.
                        I'm majoring in computer science and I'm in Revelle College. In my
                        free time, I enjoy hiking, swimming, and cooking. I'm really
                        excited to serve as a Peer Mentoring Chair this year, and I look
                        forward to having the opportunity to support the first-year cohort
                        in their transition into UCSD.
                        </p>
                    </div>
                    </div>

                    {/* Peer Mentor Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Jervic Aquino.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Jervic Aquino - Peer Mentor Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hi guys! I'm Jervic, a second-year Revelle student majoring in
                        General Biology. I'm interested in forensics and I hope to
                        eventually work in that field. In my free time, I like to watch
                        shows on Netflix and go on walks while listening to music.
                        </p>
                    </div>
                    </div>

                    {/* Social Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Reynelle Aricheta.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Reynelle Leila Aricheta - Social Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hello everyone! I’m Reynelle Leila Aricheta, and my pronouns are
                        she/hers. I’m a third year majoring in Ecology, Behavior, and
                        Evolution with a minor in Environmental Studies in Revelle
                        College! In my free time, I enjoy cafe hopping, concerts, and
                        dance.
                        </p>
                    </div>
                    </div>

                    {/* Social Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Andrew Doan.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Andrew Doan - Social Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hi Everyone! My name is Andrew Doan and I am currently studying
                        Math-CS as a 2nd year in Eighth College. I typically play video
                        games, play sports, or watch shows in my free time but I am always
                        willing to try new things. Feel free to reach out!
                        </p>
                    </div>
                    </div>

                    {/* Volunteer Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Desiree Menjivar.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Desiree Menjivar - Volunteer Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Desiree and I am a third-year from Revelle
                        College. I am currently majoring in Marine Biology and planning to
                        minor in General Biology. I enjoy walking along the beach, baking,
                        writing, and going thrift shopping.
                        </p>
                    </div>
                    </div>

                    {/* Volunteer Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Annie Tran.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Annie Tran - Volunteer Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Annie, and I am a second-year Biochemistry major
                        in Marshall College. I'm from San Diego, and I enjoy watching
                        movies, collecting plants, and going out with friends and family.
                        </p>
                    </div>
                    </div>

                    {/* Webmaster */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Carlos Gomez.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Carlos Gomez - Webmaster</h4>
                    <div className="board-desc">
                        <p>
                        Hi, I'm Carlos, a third year Math-CS major from Sixth college, and
                        I joined CSA in order to contribute to fun events and to create a
                        more close-knit community.
                        </p>
                    </div>
                    </div>

                    {/* Webmaster */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Foster Dang.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Foster Dang - Webmaster</h4>
                    <div className="board-desc">
                        <p>
                        Hi guys! I'm Foster and I'm a third-year Computer Engineering
                        major in Sixth College. Outside of school I play an unhealthy
                        amount of Deep Rock Galactic and (try to) go to the gym. I also
                        like listening to older Chinese music and am currently trying to
                        enhance my Cantonese speaking abilities. As webmaster, I'm always
                        looking to improve the website so feel free to email me (or
                        Carlos) if you have any ideas or concerns!
                        </p>
                    </div>
                    </div>

                    {/* Publicity Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Phuong Nguyen.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Phuong Nguyen - Publicity Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hi, my name is Phuong! I’m a second-year at Eighth College
                        majoring in Human Biology. I love going on spontaneous adventures
                        with my dog, my family, and my friends!
                        </p>
                    </div>
                    </div>

                    {/* Publicity Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Maria Habashy.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Maria Habashy - Publicity Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hello everyone, my name is Maria Habashy. I am a Speculative
                        Design major and Urban Studies and Planning minor in Sixth
                        college. I joined the CSA Board because I was eager to learn and
                        have fun, values that align perfectly with the principles upheld
                        by the CSA. Currently, I serve as one of the Publicity Chairs,
                        where I get to channel my interest for design into crafting
                        engaging and effective promotional posts and materials for the CSA
                        Board. I thrive in taking ideas and feedback and turning it into
                        interactive content and materials for publicity. My role allows me
                        to merge creativity with practicality, and I am committed to
                        bringing our events, plans, and visions to life!
                        </p>
                    </div>
                    </div>

                    {/* Director-At-Large */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Felicia Gallardo.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Felicia Gallardo - Director-At-Large</h4>
                    <div className="board-desc">
                        <p>
                        Hello!! My name is Felicia Gallardo, I am a second year majoring
                        in Human Biology in Revelle College! I love exploring and going to
                        Dodger games, and my favorite part of UCSD is the diversity of
                        people that you have the chance to meet.
                        </p>
                    </div>
                    </div>

                    {/* Director-At-Large */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Annie Nguyen.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Annie Nguyen - Director-At-Large</h4>
                    <div className="board-desc">
                        <p>
                        Hello, my name is Annie and I am a third year at Sixth College,
                        double majoring in Political Science (Public Law) and Business
                        Economics, with a minor in Accounting! In my free time, I love to
                        try new foods and go shopping!
                        </p>
                    </div>
                    </div>

                    {/* Director-At-Large */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Kaitlyn Tan.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Kaitlyn Tan - Director-At-Large</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Kaitlyn and I am a second-year Marshall student
                        majoring in Chemistry. I am passionate about addressing health
                        disparities faced by minority groups, while enjoying webtoons and
                        crafts in my free time. If you are looking for someone to cafe hop
                        with, I'm your person!
                        </p>
                    </div>
                    </div>

                    {/* Freshman Ambassador */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Leyna Thai.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Leyna Thai - Freshman Ambassador</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Leyna, and I am a first year Revelle student
                        majoring in Biochemistry. I enjoy going outside, traveling and
                        volunteering whenever I can!
                        </p>
                    </div>
                    </div>

                    {/* Freshman Ambassador */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Leo Nunez.png']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Leo Nunez - Freshman Ambassador</h4>
                    <div className="board-desc">
                        <p>
                        Nice to meet you! I’m Leo, a first-year bioengineering undergrad
                        assigned to and living in Eighth college, specifically Sankofa. I
                        love slurpees, tacos, and more importantly animals! It’s a
                        pleasure to be at UCSD, and I’m very excited to see everyone!
                        </p>
                    </div>
                    </div>

                    {/* Board Intern */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Alondra Gutierrez.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Alondra Gutierrez - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Alondra and I am a first-year Pharmacological
                        Chemistry major. I am a part of seventh college and I enjoy
                        writing poetry, listening to music, and hanging out with my
                        friends.
                        </p>
                    </div>
                    </div>

                    {/* Board Intern */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Jenni Cruz.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Jenni Cruz - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        My name is Jenni, I am a freshman here at UCSD, I am majoring in
                        Psychology and I am in Seventh college!
                        </p>
                    </div>
                    </div>

                    {/* Board Intern */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Berleen Grewal.png']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Berleen Grewal - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        Hey! My name is Berleen Grewal, and I'm a first year Electrical
                        Engineering student living in Sixth College. Some of my hobbies
                        include crocheting, painting, and watching Netflix shows. My
                        favorite show this year is definitely Gilmore Girls!
                        </p>
                    </div>
                    </div>

                    {/* Board Intern */}
                    <div className="col-sm-6 animated fadeInUp">
                        <div className="board-image">
                            <img
                            alt="board picture"
                            className="lazy"
                            src={boardHeadshots['Mikey Nguyen.png']}
                            loading="lazy"
                            />
                        </div>
                        <h4>Mikey Nguyen - Board Intern</h4>
                        <div className="board-desc">
                            <p>
                            Hey y’all! I’m Mikey Nguyen, a first-year Computer Science major
                            from Eighth College. Fun fact about me is that I despise Seaside
                            now and don’t listen to Keshi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;