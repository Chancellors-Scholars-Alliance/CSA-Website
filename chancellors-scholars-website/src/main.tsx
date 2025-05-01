import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// CSS Imports
import '../src/css/animate.min.css'
import '../src/css/bootstrap.min.css'
import '../src/css/events.css'
import '../src/css/jquery-ui.min.css'
import '../src/css/jquery-ui.structure.min.css'
import '../src/css/jquery-ui.theme.min.css'
import '../src/css/site-specific.css'

// Routing objects
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

// Views (Pages) 
import Homepage from './views/Homepage.tsx';
import Events from './views/Events.tsx';
import About from './views/About.tsx';
import CSJournals from './views/CSJournals.tsx';
import Board from './views/Board.tsx';
import PeerMentor from './views/PeerMentor.tsx';
import Contact from './views/Contact.tsx';
import Spotlight from './views/Spotlight.tsx';

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
    path: "/journals",
    element: <App />,
    children: [
      {
        path: "/journals",
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
        element: <Spotlight />
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
  </StrictMode>
)
