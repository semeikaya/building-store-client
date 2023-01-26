import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Layout from "./Layout/Layout";
import Main from "./Main/Main";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<Main />} />
          <Route path="reviews" element={<Main />} />
          <Route path="contacts" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
