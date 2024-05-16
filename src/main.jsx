import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home/Home';
import Root from './Component/Root/Root';
import Login from './Component/LOgin/Login';
import Registration from './Component/Registration/Registration';
import AuthProvider from './Component/Providers/AuthProvider';
import AddBook from './Component/AddBook/AddBook';
import Book from './Book/Book';
import MyBook from './MyBook/MyBook';
import UpdateBook from './Component/UpdateBook/UpdateBook'
import BookCard from './BookCard/BookCard';
import Pagination from './Pagination/Pagination';
import AllBook from './AllBook/AllBook';
import BookDetails from '../public/BookDetails/BookDetails';
import ErrorPage from './ErrorPage.jsx/ErrorPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import All from './All/All';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    
      children: [
        {
          path:'/',
          element:<Home></Home>
          
        },
        {
          path: '/login',
          element:<Login></Login>,
        },
        {
          path: '/rg',
          element:<Registration></Registration>,

        },
        {
          path: '/add',
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path: '/book',
          element:<Book></Book>,
          loader: () => fetch('http://localhost:5000/book'),
          
        },
        {
          path: '/myBook',
          element: <PrivateRoute><MyBook></MyBook></PrivateRoute>,
         
        },
        {
          path: '/update/:id',
          element: <UpdateBook></UpdateBook>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`),
        },
        {
          path: '/pg',
          element: <Pagination></Pagination>,
          loader: () => fetch('http://localhost:5000/booksCount'),
        },
        {
          path: 'all',
          element: <PrivateRoute><AllBook></AllBook></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/book'),
          
        },
        {
          path: '/book/:id',
          element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/book')

        },
      
        
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
