import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav id="nav_custom">
            <ul className="ul-custom">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Post</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Registrati</Link>
                </li>
            </ul>
        </nav>
    )
}