import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Login from "../pages/login/Login";
import CanvasCar from "../Components/Dashboardlist/CanvasCar";
import ReportTable from "../pages/DashboardContent/ReportTable";
import CanvasDashboard from '../Components/Dashboardlist/CanvasDashboard';
// import ChartComponent from "../pages/DashboardContent/ChartComponent";
import AddCar from "../Components/Car/AddCar";
import ChartComponent from "../pages/DashboardContent/ChartComponent";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RenderLayout children={[< ReportTable />, <CanvasDashboard />]} />
    },
    {
        path: "/list",
        element: <RenderLayout children={[<CanvasCar />]} />
    },
    {
        path: "/SignIn",
        element: <Login />
    },
    {
        path: "/ChartComponent",
        element: <ChartComponent />
    },
    {
        path: "/AddCar",
        element: <RenderLayout children={[<AddCar />]} />
    },
]);