import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import FoundPage from "./components/FoundPage/FoundPage";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/LoginPage/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import MainPage from "./components/MainPage/MainPage";
function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Register />
      <Login />
      <FoundPage />
      <ForgotPassword />
    </div>
  );
}

export default App;
