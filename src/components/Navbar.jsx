
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

export default function Navbar() {

    const { user, logout } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav id="nav_custom">
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
