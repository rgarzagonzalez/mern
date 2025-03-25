import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Record from './components/Record';
import RecordList from './components/RecordList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    chiuldren: [
      {
        path: '/',
        element: <RecordList />,
      },
    ],
  },

  {
    path: 'create',
    element: <App />,
    children: [
      {
        path: '/edit/:id',
        element: <Record />,
      },
    ],
  },

  {
    path: '/create',
    element: <App />,
    children: [
      {
        path: '/create',
        element: <Record />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>
);