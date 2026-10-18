import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import type { NavItem } from "../interfaces/NavItem";

const navItems: NavItem[] = [
    { to: "/", label: "Home" },
    { to: "/education", label: "Education" },
    { to: "/experience", label: "Experience" },
    { to: "/skills", label: "Skills" },
    { to: "/certifications", label: "Certifications" },
    { to: "/volunteering", label: "Volunteering" },
    { to: "/projects", label: "Projects" },
    { to: "/credits", label: "Credits" },
];

export default function Nav() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav>
            <ul>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link to={item.to}>{item.label}</Link>
                    </li>
                ))}
            </ul>
            <button
                id="theme-toggle"
                type="button"
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                onClick={toggleTheme}
            >
                <span className="icon-sun" aria-hidden="true">&#9788;</span>
                <svg
                    className="icon-moon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </button>
        </nav>
    );
}