import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Login from "../Pages/login/Login";
import CanvasCar from "../Components/Dashboardlist/CanvasCar";
import ReportTable from "../Pages/DashboardContent/ReportTable";
import CanvasDashboard from '../Components/Dashboardlist/CanvasDashboard';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RenderLayout children={[<CanvasDashboard />, <ReportTable />]} />
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