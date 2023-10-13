import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeScreen from './screens/HomeScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen.jsx'
import CartScreen from './screens/CartScreen.jsx'
import CheckoutScreen from './screens/CheckoutScreen.jsx'
import ProfieScreen from './screens/ProfieScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route index={true} path='/login' element={<LoginScreen />} />
      <Route index={true} path='/register' element={<RegisterScreen />} />
      <Route index={true} path='/cart' element={<CartScreen />} />
      <Route index={true} path='/checkout' element={<CheckoutScreen />} />
      <Route index={true} path='/profile' element={<ProfieScreen />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
