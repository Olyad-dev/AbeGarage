import { Routes, Route } from 'react-router-dom'
// Import the css files 
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";
// Import the custom css file
import './assets/styles/custom.css';


// Import the pages
import Home from './markup/pages/Home';
import About from './markup/pages/AboutPage';
import Service from './markup/pages/Services';
import Contact from './markup/pages/Contact';
import AddEmployee from './markup/pages/admin/AddEmployee';
import Login from "./markup/pages/Login";
import Unauthorized from './markup/pages/Unauthorized';
import Orders from './markup/pages/admin/Orders';
import Employees from './markup/pages/admin/Employees';
import Customers from './markup/pages/admin/Customers';
import NotFound from './markup/pages/NotFound';


// import the components
import Header from './markup/components/Header/Header';
import Footer from './markup/components/Footer/Footer';
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute';



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
