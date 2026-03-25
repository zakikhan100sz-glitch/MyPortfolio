import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./shared/AppLayout";
import HomePage from "./views/HomePage";
import ProjectsPage from "./views/ProjectsPage";
import ProjectDetailsPage from "./views/ProjectDetailsPage";

export default createBrowserRouter([{
  path: "/", element: <AppLayout />, children: [
    { index: true, element: <HomePage /> },
    { path: "projects", element: <ProjectsPage /> },
    { path: "projects/:slug", element: <ProjectDetailsPage /> }
  ]
}]);
