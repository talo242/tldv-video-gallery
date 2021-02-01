import React, { useState, useEffect } from "react";
import logo from "../../tldv-logo.svg";
import "./App.css";
import { getVideos } from "../../api";
import VideoResponse from "../../interfaces/videos/videos.interface";

function App() {
  const [videos, setVideos] = useState<Array<VideoResponse>>([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const response: VideoResponse[] = await getVideos();
      setVideos(response);
    };

    fetchVideos();
  }, []);

  console.log(videos);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Video Gallery</h1>
      </header>
    </div>
  );
}

export default App;
