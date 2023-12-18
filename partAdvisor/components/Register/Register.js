import "./Register.css";
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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
                <h2 className="KayıtOL">Kayıt Ol</h2>
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
                      name="name"
                      fullWidth
                      id="outlined-basic"
                      label="Adınız"
                      variant="outlined"
                    />
                  </div>
                </Box>
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
                      name="surname"
                      fullWidth
                      id="outlined-basic"
                      label="Soyadınız"
                      variant="outlined"
                    />
                  </div>
                </Box>
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
                    Şifre
                  </InputLabel>
                  <OutlinedInput
                    name="password"
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
                  <small>Hesabınız var mı? Giriş Yap</small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg w-100 fs-6 butn">Kayıt Ol</button>
              </div>
              <div className="input-group mb-3">
                <button className="input-group mb-3 btn btn-lg  w-100 fs-6 butn1">
                  Google ile Kayıt Ol
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
