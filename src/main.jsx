import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './page/Homepage/index';
import LoginForm from './components/forms/loginForm';
import SignInForm from './components/forms/signinForm';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },

    ]

  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/signup',
    element: <SignInForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode >,
)
