import { createBrowserRouter } from "react-router";
import Homepage from '../views/Homepage';
import Posts from '../views/Posts/Posts';
import Layout from '../components/Layout';
import { getAllPostsLoader, getSinglePostLoader } from "./loaders";
import Detail from "../views/Posts/Detail";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Homepage,
            },
            {
                path: '/posts',
                element: (
                    <ProtectedRoute>
                        <Posts />
                    </ProtectedRoute>
                ),
                loader: getAllPostsLoader
            },
            {
                path: "/posts/:id",
                element: (
                    <ProtectedRoute>
                        <Detail />
                    </ProtectedRoute>
                ),
                loader: getSinglePostLoader
            },
            {
                path: '/login',
                Component: Login

            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])

export default router;