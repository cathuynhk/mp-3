import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <p>
                All rights reserved: <Link to="/credits">Credits</Link> &#169; | Last Updated:
                September 21st, 2026
            </p>
        </footer>
    );
}