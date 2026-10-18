import useCalculator from "../hooks/useCalculator";

export default function ProjectsPage() {
    const { first, setFirst, second, setSecond, result, calculate, clear } =
        useCalculator();

    const outputClass =
        result !== null && result < 0 ? "negative" : "";

    return (
        <>
            <section className="hero-section">
                <h2 className="page-title">Projects</h2>

                <section id="project-list">
                    <h3>Other Projects</h3>
                    <p>Space reserved for future project links and GitHub repositories.</p>
                </section>
            </section>

            <section className="rest-section">
                <section id="calculator">
                    <h3>JavaScript Calculator</h3>

                    <div className="calc-inputs">
                        <div className="calc-field">
                            <label htmlFor="first-number">First Number</label>
                            <input
                                type="text"
                                id="first-number"
                                value={first}
                                onChange={(e) => setFirst(e.target.value)}
                            />
                        </div>

                        <div className="calc-field">
                            <label htmlFor="second-number">Second Number</label>
                            <input
                                type="text"
                                id="second-number"
                                value={second}
                                onChange={(e) => setSecond(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="calc-buttons">
                        <button type="button" onClick={() => calculate("+")}>+</button>
                        <button type="button" onClick={() => calculate("-")}>-</button>
                        <button type="button" onClick={() => calculate("*")}>*</button>
                        <button type="button" onClick={() => calculate("/")}>/</button>
                        <button type="button" onClick={() => calculate("**")}>**</button>
                        <button type="button" onClick={clear}>Clear</button>
                    </div>

                    <div className="calc-output">
                        <h3 id="output" className={outputClass}>
                            {result !== null ? String(result) : ""}
                        </h3>
                    </div>
                </section>
            </section>
        </>
    );
}