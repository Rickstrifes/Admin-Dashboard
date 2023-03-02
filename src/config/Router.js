import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import CanvasDashboard from "../Components/Dashboardlist/CanvasDashboard";
import Login from "../Pages/login/Login";
import CanvasCar from "../Components/Dashboardlist/CanvasCar";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RenderLayout children={[<CanvasDashboard />]} />
    },
    {
        path: "/list",
        element: <RenderLayout children={[<CanvasCar />]} />
    },
    {
        path: "/SignIn",
        element: <Login />
    }
]);