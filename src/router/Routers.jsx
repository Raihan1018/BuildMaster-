import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Services from "../pages/services/Services";
import Projects from "../pages/Projects/Projects";
import OurTeam from "../pages/OurTeam/OurTeam";
import Contact from "../pages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "out-team",
        element: <OurTeam />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
