import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Categories from './pages/Categories.jsx'
import Product from './pages/Product.jsx'
const addedItems = [];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/categories',
    element: <Categories />
  },
  {
    path: '/product/:productId',
    element: <Product array={addedItems}/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
