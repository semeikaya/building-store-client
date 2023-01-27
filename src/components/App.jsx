import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Main from "./Main/Main";
import Contact from '../pages/Contact/Contact'
import Cart from "../pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<Main />} />
          <Route path="reviews" element={<Main />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="contacts" element={<Main />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
} 

export default App;
