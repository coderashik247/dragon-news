import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

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
            }
        ]
    }
])