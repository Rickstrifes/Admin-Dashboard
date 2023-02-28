import { RouterProvider } from "react-router";
import { Router } from "./config/Router";


function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
