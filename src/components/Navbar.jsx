
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import useScroll from "../hooks/useScroll";

export default function Navbar() {

    const { user, logout } = useContext(UserContext);

    const [scrolled, scrollY] = useScroll();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav
            id="nav_custom"
            ref={scrolled}
            className={scrollY > 100 ? "dark_navbar" : "light_navbar"}
        >
            <ul className="ul-custom">
                <li>
                    <Link to="/">Home</Link>
                </li>

                {user && (
                    <li>
                        <Link to="/posts">Post</Link>
                    </li>
                )}

                {!user ? (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Registrati</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <span>{user.name}</span>
                        </li>
                        <li>
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
