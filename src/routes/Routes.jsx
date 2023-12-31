import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import Profile from '../pages/Dashboard/pages/Profile'
import DashboardLayout from '../layouts/DashboardLayout'
import CreateTask from '../pages/Dashboard/pages/CreateTask'
import TaskManagement from '../pages/Dashboard/pages/TaskManagement'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: 'Create-Task',
        element: <PrivateRoute><CreateTask /></PrivateRoute>,
      },
      {
        path: 'TaskManagement',
        element: <PrivateRoute><TaskManagement /></PrivateRoute>,
      },
    ]
  },
])
