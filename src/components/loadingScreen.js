import React from "react";
// import { ProgressBar } from "react-loader-spinner";
import "./loadingScreen.css"
import { LinearProgress } from "@mui/material";

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
        <p style={{marginLeft: "32px", marginTop:"36px"}}>Uploading...</p>
        <LinearProgress className="progress-bar-wrapper"  color="primary" />
      </div>
  );
}

export default LoadingScreen;
