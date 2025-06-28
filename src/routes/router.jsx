import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects/:slug",
    element: <ProjectDetails />,
  },
]);

export default router;
