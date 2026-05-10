import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/common/Home";
import Login from "./pages/common/LoginPage";
import Register from "./pages/common/RegisterPage";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;