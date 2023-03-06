import { createBrowserRouter } from 'react-router-dom';
import RenderLayout from './RenderLayout';
import Login from '../pages/login/Login';
import CanvasCar from '../Components/Dashboardlist/CanvasCar';
import CanvasDashboard from '../Components/Dashboardlist/CanvasDashboard';
import Addcar from '../Components/Car/AddCar';
import EditCar from '../Components/Car/EditCar';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Dashboard',
    element: <RenderLayout children={[<CanvasDashboard />]} />,
  },
  {
    path: '/Addcar',
    element: <RenderLayout children={[<CanvasCar />, <Addcar />]} />,
  },
  {
    path: '/Edit',
    element: <RenderLayout children={[<CanvasCar />, <EditCar />]} />,
  },    
]);
