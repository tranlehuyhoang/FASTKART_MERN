

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardScreen from './screen/DashboardScreen';
import NavSlide from './components/NavSlide';
import LoginAdminScreen from './screen/LoginAdminScreen';
import ProductScreen from './screen/ProductScreen';
import CategoryScreen from './screen/CategoryScreen';
import UserScreen from './screen/UserScreen';
import OrderScreen from './screen/OrderScreen';
import ReviewScreen from './screen/ReviewScreen';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavSlide />} >
            <Route index={true} path="/" element={<DashboardScreen />} />
            <Route index={true} path="/product" element={<ProductScreen />} />
            <Route index={true} path="/category" element={<CategoryScreen />} />
            <Route index={true} path="/user" element={<UserScreen />} />
            <Route index={true} path="/order" element={<OrderScreen />} />
            <Route index={true} path="/review" element={<ReviewScreen />} />
          </Route>
          <Route path="/login" element={<LoginAdminScreen />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
