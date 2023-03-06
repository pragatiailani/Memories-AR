import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import image from "../imgs/register_img.png";

function SignUp(props) {
  return (
    <div className="container">
      <div className="form_panel">
        <div className="title">Register</div>
        <div className="subtitle">Create Your Account</div>

        <Box sx={props.field_style}>
          <TextField
            label="Name"
            variant="outlined"
          />
          <TextField
            label="Email ID"
            variant="outlined"
          />
          <TextField label="Password" type="password" variant="outlined" />
          <TextField label="Confirm Password" type="password" variant="outlined" />
          <Button variant="contained">Sign Up</Button>
        </Box>
        <Box sx={props.light_button}>
          <Link to="/"><Button variant="contained">Sign In</Button></Link>
        </Box>
        </div>
      <div className="img_panel">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default SignUp;
