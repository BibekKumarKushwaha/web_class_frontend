
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/Navbar';

//toast config 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './admin/admin_dashbaord/AdminDashboard';
import UpdateProducts from './admin/update_product/UpdateProducts';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        
        <Route path ='/' element={<Homepage/>} />
        <Route path ='/login' element={<Login/>} />
        <Route path ='/register' element={<Register/>} />

        { /*admin */  }
        <Route path ='/admin/dashboard' element={<AdminDashboard/>} />
        <Route path ='/admin/update/:id' element={<UpdateProducts/>}/>


        
      </Routes>
    </Router>
  );
}

export default App;
