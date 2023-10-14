

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import DashboardScreen from '../../frontend/src/admin/DashboardScreen';
import LoginAdminScreen from '../../frontend/src/admin/LoginAdminScreen';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/login" element={<LoginAdminScreen />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
