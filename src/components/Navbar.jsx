import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav id="nav_custom">
            <ul className="ul-custom">
                <li>
                    <Link to="/posts">Post</Link>
                </li>
                 <li>
                    <Link to="/">Pokedex</Link>
                </li>
            </ul>
        </nav>
    )
}