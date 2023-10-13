

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import HomeScreen from './client/HomeScreen.jsx'
import RegisterScreen from './client/RegisterScreen.jsx'
import LoginScreen from './client/LoginScreen.jsx'
import CartScreen from './client/CartScreen.jsx'
import CheckoutScreen from './client/CheckoutScreen.jsx'
import ProfileScreen from './client/ProfieScreen.jsx'
import ProductScreen from './client/ProductScreen.jsx'
import InvoiceScreen from './client/InvoiceScreen.jsx'
import OrderSuccessScreen from './client/OrderSuccessScreen.jsx';
import LoginAdminScreen from './admin/LoginAdminScreen.jsx';
import DashboardScreen from './admin/DashboardScreen.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/invoice" element={<InvoiceScreen />} />
          <Route path="/order-success" element={<OrderSuccessScreen />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/admin" element={<DashboardScreen />} />
          <Route path="/admin/login" element={<LoginAdminScreen />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
