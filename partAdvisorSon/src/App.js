import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import FoundPage from "./components/FoundPage/FoundPage";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/LoginPage/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import MainPage from "./components/MainPage/MainPage";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FoundPage" element={<FoundPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
