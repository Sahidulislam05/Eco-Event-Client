import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import CreateEvent from "../Pages/CreateEvent/CreateEvent";
import UpcomingEvents from "../Pages/UpcomingEvents/UpcomingEvents";
import JoinedEvent from "../Pages/JoinedEvent/JoinedEvent";
import ManageEvents from "../Pages/ManageEvents/ManageEvents";
import Login from "../Pages/Join/Login";
import Register from "../Pages/Join/Register";
import PrivateRoute from "../Private/PrivateRoute";
import EventDetails from "../Components/EventCard/EventDetails";
import UpdateEvent from "../Components/UpdateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/upcoming-events",
        Component: UpcomingEvents,
        loader: () => fetch("http://localhost:3000/events"),
      },
      {
        path: "/event-details/:id",
        Component: EventDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
      },
      {
        path: "/update-event/:id",
        element: (
          <PrivateRoute>
            <UpdateEvent></UpdateEvent>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/joined-event",
        element: (
          <PrivateRoute>
            <JoinedEvent></JoinedEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events",
        element: (
          <PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
