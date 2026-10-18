import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <section className="hero-section">
                <h2 className="page-title">Home</h2>

                <div className="profile-row">
                    <div className="profile-image-wrap">
                        <img src="/mp-3/src/index-media/profile.png" alt="Portrait of Catalina Huynh" />
                    </div>
                    <p className="bio">
                        My name is Catalina Huynh, and I am a full-time Computer Science Undergraduate at
                        Boston University. I would like to further my academic and professional involvement
                        in Information Security, CyberSecurity, and Health Informatics while I continue to
                        advance towards a Masters or a full-time Security position.
                    </p>
                </div>

                <p className="bio">
                    Welcome to my website! Here you will find my{" "}
                    <Link to="/education" className="bio-highlight">
                        Educational
                    </Link>{" "}
                    and my{" "}
                    <Link to="/experience" className="bio-highlight">
                        Employment
                    </Link>{" "}
                    history; as well as other information that might be of interest to you.
                </p>
            </section>

            <section className="rest-section">
                <section id="about-me">
                    <h2>About Me</h2>
                    <p>
                        Hi there! My name is Catalina Huynh, but my friends call me Kitty :) I promise I'm
                        just as warm and approachable as Hello Kitty. My work is centered on keeping systems
                        secure, data crystal-clear, and operations running smoothly. Whether that's through
                        cybersecurity, network infrastructure, or turning complex spreadsheets into
                        actionable insights, I take pride in being the calm, reliable person to turn to.
                    </p>
                    <br />
                    <p>
                        Beyond the desk, I'm deeply passionate about the bigger picture&mdash;humanitarian and
                        economic issues, women's rights, and green renewable energy&mdash;because I believe that
                        technology and progress should always serve people and the planet. When I'm not
                        optimizing performance or securing data, you'll likely find me with a warm cup of tea,
                        a good book, cooking up something new in the kitchen, or jamming out to music.
                        (And yes, despite the nickname, I'm a huge cat lover&mdash;go figure! I have two cats 😸).
                    </p>
                    <br />
                    <p>
                        I'm always excited to connect, collaborate, and grow together, so don't be a stranger!
                    </p>
                </section>

                <br />

                <section id="contact-info">
                    <h2>Contact Information</h2>
                    <p>
                        Boston, MA | P: +1 (617) 606-1309 |
                        cathuynh.k@gmail.com | linkedin.com/in/cathuynhk/
                    </p>
                </section>
            </section>
        </>
    );
}