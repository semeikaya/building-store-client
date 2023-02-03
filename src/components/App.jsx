import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Main from "./Main/Main";
import Contact from '../pages/Contact/Contact'
import Cart from "../pages/Cart/Cart";
import Auth from "../pages/Auth/Auth";
import Login from "./Login/Login";
import About from "../pages/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="auth" element={<Auth />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Main />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
} 

export default App;
