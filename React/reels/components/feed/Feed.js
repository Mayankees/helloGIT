import React from "react";
import Navbar from "./Navbar.js";
import { Avatar, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Feed() {
  return (
    <div className="feed-cont">
      <Navbar />
      <div className="video-cont">
        <div className="post-cont">
          <video src="https://www.youtube.com/watch?v=rgpc0DOOchg" />
          <div className="video-info">
            <div className="avatar-cont">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <p>Mayank</p>
            </div>
            <div className="post-like">
              <FavoriteBorderOutlinedIcon fontSize="large" />
              <p>10</p>
            </div>
          </div>
        </div>
        <div className="post-cont">
          <video src="https://www.youtube.com/watch?v=rgpc0DOOchg" />
          <div className="video-info">
            <div className="avatar-cont">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <p>Mayank</p>
            </div>
            <div className="post-like">
              <FavoriteBorderOutlinedIcon fontSize="large" />
              <p>10</p>
            </div>
          </div>
        </div>
        <div className="post-cont">
          <video src="https://www.youtube.com/watch?v=rgpc0DOOchg" />
          <div className="video-info">
            <div className="avatar-cont">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <p>Mayank</p>
            </div>
            <div className="post-like">
              <FavoriteBorderOutlinedIcon fontSize="large" />
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
