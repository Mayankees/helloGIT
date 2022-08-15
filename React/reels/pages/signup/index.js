import React from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import logo from "../../assets/Insta.jpg";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function index() {
  return (
    <>
      <div className="signup-cont">
        <div className="signup-card">
          <Image src={logo} />
          <TextField
            id="outlined-basic"
            label="Mobile number or email address"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense"
          />
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            fullWidth
            type="password"
            margin="dense"
          />
          <Button
            color="secondary"
            variant="outlined"
            fullWidth
            component="label"
            size="small"
            style={{ marginTop: "0.5rem" }}
            startIcon={<CloudUploadIcon />}
          >
            Upload your profile picture
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button
            variant="contained"
            fullWidth
            component="label"
            size="small"
            style={{ marginTop: "1rem" }}
          >
            sign up
          </Button>
          <div className="tnc">
            By signing up, you agree to our <b>Terms, Privacy Policy</b> and
            <b> Cookies Policy</b>.
          </div>
        </div>
        <div className="bottom-card">
          Have an account? <span style={{ color: "blueviolet" }}>Log in</span>
        </div>
      </div>
    </>
  );
}

export default index;
