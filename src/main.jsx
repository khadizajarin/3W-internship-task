import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componants/Home/Home.jsx';
import BottomNav from './Componants/BottomNav/BottomNav.jsx';
import Task from './Componants/Task.jsx';
import CreateTask from './Componants/CreateTask.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path : "/bottomnav",
        element: <BottomNav></BottomNav>
      },
      {
        path : "/tasks",
        element: <Task></Task>
      },
      {
        path : "/create-task",
        element: <CreateTask></CreateTask>
      },
      {
        path : "/manage-tasks",
        element: <CreateTask></CreateTask>
      },
      {
        path : "/leaderboard",
        element: <CreateTask></CreateTask>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
