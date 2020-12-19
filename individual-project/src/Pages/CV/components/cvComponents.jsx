export const Section = ({ name, time, location }) => {
    return (
        <div className="course-container">
            <h3>{name}</h3>
            <span>{time}</span>
            <span>{location}</span>
        </div>
    )
}

export const CvMain = () => {
    return (
        <main>
            <div className="cvMainSection">
                <h2>Profile</h2>
                <p>Customer support representative with a high desire to learn. Interested in Web
                development, I am motivated to invest time in learning about web applications and the
                tools that are used to build them. I have started to acquire basic knowledge about HTML,
                CSS, Javascript and the way they interact by attending to courses, watching online tutorials,
                reading documentation and creating small web applications.
                </p>
                <p>I am eager to deepen my knowledge as I consider a career in this field.</p>
            </div>
            <div className="cvMainSection">
                <h2>Employment History</h2>
                <Section name="Customer Support Representative, SYKES ENTERPRISES EASTERN EUROPE S.R.L" time="Nov 2019 - Present" location="Cluj-Napoca"></Section>
            </div>
            <div className="cvMainSection">
                <h2>Education</h2>
                <Section name="Babes-Boliay University, Psychology" time="2016-2019" location="Cluj-Napoca"></Section>
            </div>
            <div className="cvMainSection">
                <h2>Courses</h2>
                <Section name="Introduction to IT, The informal School of IT" time="Jun 2020 - Jul 2020" location="Cluj-Napoca"></Section>
                <Section name="Front-end Web development, The informal School of IT" time="Jul 2020 - Dec 2020" location="Cluj-Napoca"></Section>
            </div>
            <div className="cvMainSection">
                <h2>Volunteering</h2>
                <Section name="Romanian Red Cross" time="2019" location="Cluj-Napoca"></Section>
            </div>
        </main>
    )
}

export const CvAside = () => {
    return (
        <aside>
            <div className="cvAsideSection">
                <h2>Contact</h2>
                <span className="headerSpan">Email</span>
                <span>vlad.pop0797@gmail.com</span>
                <span className="headerSpan">Phone number</span>
                <span>0761361797</span>
            </div>
            <div className="cvAsideSection">
                <h2>Skills</h2>
                <ul>
                    <li>Adaptability</li>
                    <li>Information gathering</li>
                    <li>Ability to work under pressure</li>
                    <li>Problem solving</li>
                    <li>Critical thinking</li>
                    <li>Comunication</li>
                </ul>
            </div>
            <div className="cvAsideSection">
                <h2>Languages</h2>
                <span>English</span>
            </div>
        </aside>
    )
}