import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  return (
    <div>
      <form className="form">
        <div className="form-group ">
          <div className="container-fluid">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
              <div className="row border rounded-5 justify-content-center align-items-center p-3 bg-white shadow box-area">
                <div className="baslik">
                  <h1>Şifreni Yenile</h1>
                </div>
                <div className="col-md-6 right-box">
                  <div className="row align-items-center">
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
                    <div className="input-group mt-3 mb-3">
                      <button className="btn btn-lg btn-primary w-100 fs-6">
                        Şifre sıfırla
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
