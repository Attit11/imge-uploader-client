import React from "react";
import "./imageViewer.css";
import okicon from "../asset/ok.svg";
import { apiUrl } from "../config/apiUrl";

function ImageViewer({ id }) {
  return (
    <div className="image-viewer-container">
      <img
        className="check-icon"
        src={okicon}
        alt="check-icon"
        width="35px"
        height="35px"
      />
      <h1 style={{ textAlign: "center", fontSize: "18px", marginTop: "11px" }}>
        Uploaded Successfully
      </h1>
      <img
        className="uploaded-image"
        src={`${apiUrl}/get-image/${id}`}
        alt="user"
      />
      <div className="copylink-and-button">
        <a href={`${apiUrl}/get-image/${id}`}>{`${apiUrl}/get-image/${id}`}</a>
        <button
          onClick={() =>
            navigator.clipboard.writeText(`${apiUrl}/get-image/${id}`)
          }
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}

export default ImageViewer;
