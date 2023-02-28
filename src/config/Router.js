import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Canvas from "../Components/Dashboardlist/Canvas";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RenderLayout children={[<Canvas />]} />
    }
]);