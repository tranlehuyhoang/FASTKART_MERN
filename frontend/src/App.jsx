

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen.jsx'
import RegisterScreen from './screen/RegisterScreen.jsx'
import LoginScreen from './screen/LoginScreen.jsx'
import CartScreen from './screen/CartScreen.jsx'
import CheckoutScreen from './screen/CheckoutScreen.jsx'
import ProfileScreen from './screen/ProfieScreen.jsx'
import ProductScreen from './screen/ProductScreen.jsx'
import InvoiceScreen from './screen/InvoiceScreen.jsx'
import OrderSuccessScreen from './screen/OrderSuccessScreen.jsx';


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


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
