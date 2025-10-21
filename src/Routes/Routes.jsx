import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
    {
        path:"/",
        Component: MainLayouts,
        children:[
            {
                path:"/",
                Component: Home,
            },
            {
                path:"/category/:id",
                Component: CategoryNews,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayouts></AuthLayouts>,
        children:[
            {
                path:"/auth/login",
                element: <Login></Login>
            },
            {
                path:"/auth/register",
                element: <Register></Register>
            }
        ]
    }
])