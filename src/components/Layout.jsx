import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-24">
                <Outlet />
            </main>
        </>
    );
}