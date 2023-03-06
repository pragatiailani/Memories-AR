import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import image from "../imgs/verification.png";

function Verification(props) {
  return (
    <div className="container verification">
      <div className="img_panel">
        <img src={image} alt="" />
      </div>
      <div className="form_panel">
        <div className="title">Verification</div>
        <div className="subtitle">Enter your Verification Code</div>

        <Box sx={props.field_style}>
          <TextField variant="outlined" />

          <p style={{ width: "100%", margin: "5vh 0" }}>
            We have sent verification code on your email ID. Check your inbox.
          </p>

          <Link to="/create_password"><Button variant="contained">Create</Button></Link>
        </Box>
      </div>
    </div>
  );
}

export default Verification;
