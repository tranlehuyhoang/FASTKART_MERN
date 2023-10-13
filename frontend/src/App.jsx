

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import CartScreen from './screens/CartScreen.jsx'
import CheckoutScreen from './screens/CheckoutScreen.jsx'
import ProfieScreen from './screens/ProfieScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import InvoiceScreen from './screens/InvoiceScreen.jsx'
import OrderSuccessScreen from './screens/OrderSuccessScreen.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <HomeScreen />
          } />
          <Route path="/login" element={
            <LoginScreen />
          } />
          <Route path="/register" element={
            <RegisterScreen />
          } />
          <Route path="/cart" element={
            <CartScreen />
          } />
          <Route path="/checkout" element={
            <CheckoutScreen />
          } />
          <Route path="/profile" element={
            <ProfieScreen />
          } />
          <Route path="/invoice" element={
            <InvoiceScreen />
          } />
          <Route path="/order-success" element={
            <OrderSuccessScreen />
          } />
          <Route path="/product" element={
            <ProductScreen />
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
