import { createBrowserRouter } from "react-router";
import Homepage from '../views/Homepage';
import Posts from '../views/Posts';
import Layout from '../components/Layout';
import { getAllPostsLoader, getSinglePostLoader } from "./loaders";
import Detail from "../views/Detail";
import Login from "../views/Login";
import Register from "../views/Register";

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
                Component: Posts,
                loader: getAllPostsLoader
            },
            {
                path: '/posts/:id',
                Component: Detail,
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