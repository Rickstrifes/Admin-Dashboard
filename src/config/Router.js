import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Login from "../pages/login/Login";
import CanvasCar from "../Components/Dashboardlist/CanvasCar";
import CanvasDashboard from '../Components/Dashboardlist/CanvasDashboard';


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/Dashboard",
        element: <RenderLayout children={[<CanvasDashboard />]} />
    },
    {
        path: "/list",
        element: <RenderLayout children={[<CanvasCar />]} />
    },
]);