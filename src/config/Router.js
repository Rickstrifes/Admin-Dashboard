import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import SignIn from "../pages/SignIn/SignIn";
import CanvasCar from "../Components/Dashboardlist/CanvasCar";
import ReportTable from "../pages/DashboardContent/ReportTable";
import CanvasDashboard from '../Components/Dashboardlist/CanvasDashboard';
import AddCar from "../Components/Cars/AddCar";

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
        element: <SignIn />
    },
    {
        path: "/AddCar",
        element: <RenderLayout children={[<AddCar />]} />
    }
]);