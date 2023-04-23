import React from "react";
import Dropzone from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./imageUploader.css";
import logo from "../asset/image.svg";
import { apiUrl } from "../config/apiUrl";
import axios from "axios";

function ImageUploader({
  setLoadingScreen,
  seImageViewer,
  setImageUploader,
  setId,
}) {
  const hiddenFileInput = React.useRef(null);

  const uploadFile = async (file) => {
    setImageUploader(false);
    setLoadingScreen(true);
    let data = new FormData();
    data.append("image", file);
    try {
      const image = await axios.post(`${apiUrl}/upload-image`, data);
      setId(image.data.id);
      setLoadingScreen(true);
      seImageViewer(true);
    } catch (error) {
      toast.error("There occured an error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoadingScreen(false);
      setImageUploader(true);
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    console.log("CLIKCED");
    event.preventDefault();
    uploadFile(event.target.files[0]);
  };

  return (
    <div className="image-container">
      <h2
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#4F4F4F",
          marginTop: "36px",
        }}
      >
        Upload your image
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#BDBDBD",
          marginTop: "16px",
        }}
      >
        File should be Jpeg, Png,...
      </p>
      <Dropzone
        accept={{ "image/jpeg": [".jpeg", ".png"] }}
        onDrop={(files) => uploadFile(files[0])}
      >
        {({ getRootProps, getInputProps }) => (
          <div className="container">
            <div
              {...getRootProps({
                className: "dropzone",
                onDrop: (event) => event.stopPropagation(),
              })}
            >
              <img src={logo} alt="SVG as an" />
              <input {...getInputProps()} />
              <p
                style={{ fontSize: "12px", fontWeight: 500, color: "#BDBDBD" }}
              >
                Drag and Drop your image here
              </p>
            </div>
          </div>
        )}
      </Dropzone>

      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#BDBDBD",
          marginTop: "19px",
        }}
      >
        Or
      </p>
      <div className="button-container" style={{ width: "100%" }}>
        <button onClick={handleClick} className="upload-button">
          Choose a file
        </button>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default ImageUploader;
