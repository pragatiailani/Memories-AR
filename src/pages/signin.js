import { Box, Button, TextField } from "@mui/material";
import React from "react";
import GooglePlay from "../imgs/gplay.png";
import AppleStore from "../imgs/apple_store.png";
import image from "../imgs/register_img.png";
import GoogleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";

function SignIn(props) {
  return (
    <div className="container">
      <div className="img_panel">
        <img src={image} alt="" />
      </div>
      <div className="form_panel">
        <div className="title">Welcome</div>
        <div className="subtitle">Sign In to Your Account</div>

        <Box sx={props.field_style}>
          <TextField
            label="Username, Email or Phone Number"
            variant="outlined"
          />
          <TextField label="Password" type="password" variant="outlined" />
          <Link to="/reset_password">
          <div className="subtext">Forgot Password?</div></Link>
          <Button variant="contained">Sign In</Button>
        </Box>
        <div className="smalltext">Or Sign Up With</div>
        <div className="googleIcon">
          <img src={GoogleIcon} alt="" />
        </div>
        <Box sx={props.light_button}>
          <Link to="/sign_up">
            <Button variant="contained">Sign Up</Button>
          </Link>
        </Box>
        <p>Get The App</p>
        <div className="appLinks">
          <div>
            <img src={GooglePlay} alt="" />
          </div>
          <div>
            <img src={AppleStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
