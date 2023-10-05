// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Categories from './pages/Categories.jsx'
// import Product from './pages/Product.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/categories',
//     element: <Categories />
//   },
//   {
//     path: '/product/:productId',
//     element: <Product />
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
