import React, { useState } from "react";
import ImageUploader from "./components/imageUploader";
import "./App.css";
import LoadingScreen from "./components/loadingScreen";
import ImageViewer from "./components/imageViewer";

function App() {
  const [id, setId] = useState();
  const [imageUploader, setImageUploader] = useState(true);
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [imageViewer, seImageViewer] = useState(false);
  return (
    <div className="App">
      {imageUploader && (
        <ImageUploader
          setId={setId}
          setLoadingScreen={setLoadingScreen}
          seImageViewer={seImageViewer}
          setImageUploader={setImageUploader}
        />
      )}
      {loadingScreen && <LoadingScreen />}
      {imageViewer && <ImageViewer id={id}/>}
    </div>
  );
}

export default App;
