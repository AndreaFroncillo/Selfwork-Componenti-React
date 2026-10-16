import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import useScroll from "../../hooks/useScroll";
import styles from "./Navbar.module.css";

export default function Navbar() {

    const { user, logout } = useContext(UserContext);
    const [scrolled, scrollY] = useScroll();
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setMenuOpen(false);
        navigate("/");
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav
            ref={scrolled}
            className={`fixed top-0 left-0 z-50 w-full px-3 py-3 sm:px-6 lg:px-10 transition-all duration-300 ${scrollY > 100 ? styles.scrolled : styles.navbar
                }`}
        >
            <div className="mx-auto max-w-7xl">

                <div
                    className={`${styles.navContent} flex min-h-18 items-center justify-between rounded-2xl px-4 py-3 sm:px-6`}
                >
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-3 no-underline hover:no-underline"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
                            R
                        </span>

                        <span className="text-xl font-bold tracking-tight text-white">
                            React<span className="text-indigo-400">Space</span>
                        </span>
                    </Link>

                    <ul className="!hidden md:!flex items-center justify-center gap-4 m-0 p-0 list-none">

                        <li>
                            <Link to="/" className={styles.navLink}>
                                Home
                            </Link>
                        </li>

                        {user && (
                            <li>
                                <Link to="/posts" className={styles.navLink}>
                                    Post
                                </Link>
                            </li>
                        )}

                        {!user ? (
                            <>
                                <li>
                                    <Link to="/login" className={styles.navLink}>
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/register"
                                        className="btn rounded-xl border-0 bg-indigo-600 text-white no-underline hover:bg-indigo-500 hover:no-underline"
                                    >
                                        Registrati
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <span className="px-3 text-sm font-medium text-slate-300">
                                        {user.name}
                                    </span>
                                </li>

                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline btn-error rounded-xl"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>

                    <button
                        type="button"
                        aria-label="Apri o chiudi menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="btn btn-ghost text-white md:!hidden"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {menuOpen && (
                    <ul
                        className={`${styles.mobileMenu} mt-2 flex flex-col gap-2 rounded-2xl p-4 list-none md:!hidden`}
                    >
                        <li>
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className={styles.navLink}
                            >
                                Home
                            </Link>
                        </li>

                        {user && (
                            <li>
                                <Link
                                    to="/posts"
                                    onClick={closeMenu}
                                    className={styles.navLink}
                                >
                                    Post
                                </Link>
                            </li>
                        )}

                        {!user ? (
                            <>
                                <li>
                                    <Link
                                        to="/login"
                                        onClick={closeMenu}
                                        className={styles.navLink}
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/register"
                                        onClick={closeMenu}
                                        className="btn w-full rounded-xl border-0 bg-indigo-600 text-white no-underline hover:bg-indigo-500 hover:no-underline"
                                    >
                                        Registrati
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="px-3 py-2 text-slate-300">
                                    {user.name}
                                </li>

                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-error btn-outline w-full rounded-xl"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
}
