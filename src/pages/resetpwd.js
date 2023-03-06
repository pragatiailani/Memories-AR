import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import image from "../imgs/reset_pwd.png";

function ResetPassword(props) {
  return (
    <div className="container">
      <div className="img_panel">
        <img src={image} alt="" />
      </div>
      <div className="form_panel">
        <div className="title">Reset Password</div>

        <p>
          Enter your email and a verification code will be sent to your email to
          reset the password.
        </p>

        <Box sx={props.field_style}>
          <TextField label="Email ID" variant="outlined" />
          <Link to="/verification">
            <Button variant="contained">Sign Up</Button>
          </Link>
        </Box>
      </div>
    </div>
  );
}

export default ResetPassword;
