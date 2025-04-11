import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Routing objects
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";


// Routing
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element:  <Homepage/>
      },
    ],
  },
  {
    path: "/events",
    element: <App />,
    children: [
      {
        path: "/events",
        element:  <Events />
      },
    ],
  },
  {
    path: "/about",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />
      },
    ],
  },
  {
    path: "/CS-journals",
    element: <App />,
    children: [
      {
        path: "/CS-journals",
        element: <CSJournals />
      },
    ],
  },
  {
    path: "/meet-the-board",
    element: <App />,
    children: [
      {
        path: "/meet-the-board",
        element: <Board />
      },
    ],
  },
  {
    path: "/peer-mentoring",
    element: <App />,
    children: [
      {
        path: "/peer-mentoring",
        element: <PeerMentor />
      },
    ],
  },
  {
    path: "/spotlight",
    element: <App />,
    children: [
      {
        path: "/spotlight",
        element: <CSJournals />
      },
    ],
  },
  {
    path: "/contact",
    element: <App />,
    children: [
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  } 
];

const router = createBrowserRouter([
  ...routes
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
