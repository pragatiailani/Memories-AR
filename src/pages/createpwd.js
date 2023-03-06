import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import image from "../imgs/create_pwd.png";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function CreatePassword(props) {
  const field_style = {
    display: "flex",
    flexDirection: "column",
    rowGap: "1.5vh",
    width: "60%",
    "& .MuiFormControl-root": {
      background: props.light_grey,
    },
    "& .MuiButton-root": {
      width: "100%",
      marginTop: "1vh",
      background: props.primary_colour,
    },
    "& .MuiTextField-root": {
      width: "100%",
      background: props.light_grey,
    },
    "& label.Mui-focused": {
      color: props.primary_colour,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: props.primary_colour,
      },
    },
  };

  return (
    <div className="container">
      <div className="img_panel">
        <img src={image} alt="" />
      </div>
      <div className="form_panel">
        <div className="title">Create Password</div>
        <div className="subtitle">Create New Password</div>

        <p>Your new password must be different from previous used passwords.</p>

        <Box sx={field_style}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Password
            </InputLabel>
            <OutlinedInput
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Link to="/"><Button variant="contained">Create</Button></Link>
        </Box>
      </div>
    </div>
  );
}

export default CreatePassword;
