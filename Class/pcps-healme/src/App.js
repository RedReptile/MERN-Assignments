import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import AboutComponent from "./components/About/aboutComponent";
import HomeComponent from "./components/Home/homeComponent";
import ShopComponent from "./components/Shop/shopComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import RegistrationForm from "./components/Register/RegisterComponent";
import LoginComponent from "./components/Login/LoginComponen";
import CategoryComponent from "./components/Category/CategoryComponent";
import AddProductComponent from "./components/AddProduct/AddProductComponent";
import ProductComponent from "./components/Product/ProductComponent";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Navbar />
          {/* <FunctionalProps/> */}
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/shop" element={<ShopComponent />} />
            <Route path="/addproduct" element={<AddProductComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/signup" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/category" element={<CategoryComponent />} />
            <Route path="/product" element={<ProductComponent />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
