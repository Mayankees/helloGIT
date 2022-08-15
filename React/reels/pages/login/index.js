import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import logo from "../../assets/Insta.jpg";
import { Button } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import { AuthContext } from "../../context/auth";
import { async } from "@firebase/util";

function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  let handleClick = async () => {
    try{
      console.log("handleClick");
      console.log(email);
      console.log(password);
      setLoading(true);
      setError('');
      await login(email, password);
      console.log("logged in");
    }
    catch(err){
      console.log("error",JSON.stringify(err));
      setError(err.code);
      // use setTimeout to remove error after 2sec
      setTimeout(() => {
        setError('');
      }, 5000);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="login-cont">
        <div className="insta-login-bg">
          <div className="carousel">
            <Carousel
              autoPlay
              interval={2000}
              infiniteLoop
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
            >
              <Image src={img1} />
              <Image src={img2} />
              <Image src={img3} />
              <Image src={img4} />
              <Image src={img5} />
            </Carousel>
          </div>
        </div>
        <div>
          <div className="login-card">
            <Image src={logo} />
            <TextField
              id="outlined-basic"
              label="Phone number, username or email address"
              variant="outlined"
              size="small"
              fullWidth
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
              type="password"
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              variant="contained"
              fullWidth
              component="label"
              size="small"
              style={{ marginTop: "1rem" }}
              onClick={handleClick}
              disabled={loading}
            >
              Log in
            </Button>
            {error != "" && <div style={{ color: "red" }}>{error}</div>}
            <div className="reset">Forgotten your password?</div>
          </div>
          <div className="login-bottom-card">
            Don't have an account?
            <span style={{ color: "#0095f6" }}> Sign up</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
