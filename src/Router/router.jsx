import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Agence from "../Pages/Agence";
import Projects from "../Pages/Projects";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'agence',
                Component: Agence
            },
            {
                path: 'projects',
                Component: Projects
            }
        ]
    }
])

export default router