import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import HomePage from './page/Homepage/index';
import LoginForm from './components/forms/loginForm';
import SignInForm from './components/forms/signinForm';
import ErrorPage from './page/ErrorPage.jsx';
import SearchPage from './page/SearchPage';
import { RecoilRoot } from 'recoil';
import ProtectedRoute from './routes/ProtectedRoute.jsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      { path: '/', element: <HomePage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/search/:id', element: <SearchPage /> },

    ]

  },

  {
    path: '/login',
    element: <ProtectedRoute> <LoginForm /></ProtectedRoute>
  },
  {
    path: '/signup',
    element: <ProtectedRoute> <SignInForm /></ProtectedRoute>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router} />

  </RecoilRoot>
)
