import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Login from "../pages/login/Login";
import CanvasCar from "../Components/Dashboardlist/CanvasCar";
import ReportTable from "../pages/DashboardContent/ReportTable";
import CanvasDashboard from '../Components/Dashboardlist/CanvasDashboard';
import ChartComponent from "../pages/DashboardContent/ChartComponent";

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
        element: <ChartComponent />
    }
]);