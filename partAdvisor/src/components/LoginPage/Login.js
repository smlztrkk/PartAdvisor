import { toast } from "react-toastify";
import { useState } from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
const Register = () => {
  const [button1Visible, setButton1Visible] = useState(true);

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1Visible(!button1Visible);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const provider = new GoogleAuthProvider();
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const authFunc = async () => {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );
      const user = data.user;
      if (user) {
        toast.success("kullanıcı girişi başarılı");

        setTimeout(() => {
          navigate("/FoundPage");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const googleGiris = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential.accessToken;
      const user = data.user;
      if (user) {
        navigate("/FoundPage");
      }
    } catch (error) {
      const credential = GoogleAuthProvider.credentialFromError(error);
      toast.error(credential);
    }
  };
  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white box-area shdw">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
            <div className="featured-image mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="320"
                height="320"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </div>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2 className="GirisYap">Üye Giriş</h2>
              </div>
              <div className="input-group mb-3">
                <Box
                  className="text"
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="text">
                    <TextField
                      name="email"
                      value={authData.email}
                      onChange={onChangeFunc}
                      fullWidth
                      id="outlined-basic"
                      label="E-Posta"
                      variant="outlined"
                    />
                  </div>
                </Box>
              </div>
              <div class="input-group mb-1">
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    name="password"
                    value={authData.password}
                    onChange={onChangeFunc}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>

              <div className="input-group ara">
                <div className="row">
                  <small>
                    Hesabınız yok mu? <Link to="/Register">üye ol</Link>
                  </small>
                </div>
                <div className="row">
                  <small>
                    <Link to="/ForgotPassword">Şifremi unuttum</Link>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  onClick={() => {
                    authFunc();
                    handleButtonClick(1);
                  }}
                  className="btn btn-lg w-100 fs-6 butn"
                >
                  Giriş Yap
                </button>
              </div>
              <div className="input-group mb-3">
                <button
                  onClick={googleGiris}
                  className="input-group mb-3 btn btn-lg w-100 fs-6 butn1"
                >
                  Google ile Giriş Yap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
