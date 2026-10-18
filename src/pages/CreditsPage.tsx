export default function CreditsPage() {
    return (
        <>
            <section className="hero-section">
                <h2 className="page-title">Credits</h2>

                <section>
                    <h3>Images</h3>
                    <ul>
                        <li>
                            Banner image:{" "}
                            <a
                                href="https://www.magnific.com/free-photos-vectors/cybersecurity-banner"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.magnific.com/free-photos-vectors/cybersecurity-banner
                            </a>
                        </li>
                        <li>
                            Profile picture: <em>Catalina Huynh</em>
                        </li>
                    </ul>
                </section>
            </section>

            <section className="rest-section">
                <section>
                    <h3>Fonts</h3>
                    <ul>
                        <li>Playfair Display &mdash; Google Fonts</li>
                        <li>Quicksand &mdash; Google Fonts</li>
                    </ul>
                </section>

                <br />

                <section>
                    <h3>Content</h3>
                    <ul>
                        <li>All resume content &copy; Catalina Huynh</li>
                        <li>Cherry blossom color palette inspired by spring themes</li>
                    </ul>
                </section>
            </section>
        </>
    );
}