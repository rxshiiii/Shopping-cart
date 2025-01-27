import "./App.css";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SignUp from "./pages/Signup";
import UserProvider from "./components/UserContex";
import Login from "./pages/Login";


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <UserProvider>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/cart' element = {<Cart />} />
          <Route path = '/aboutus' element = {<AboutUs />} />
          <Route path = '/contact' element = {<Contact />} />
          <Route path = '/signup' element = {<SignUp />} />
          <Route path = '/login' element = {<Login />} />
        </Routes>
      </UserProvider>

      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
