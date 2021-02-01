import React from "react";
import VideoResponse from "../../interfaces/videos/videos.interface";
// Components
import VideoCarousel from "../VideoCarousel";

interface HomeProps {
  videos: VideoResponse[];
}

const Home = (props: HomeProps) => {
  const { videos } = props;
  return (
    <div>
      {videos.length > 0 && (
        <VideoCarousel title="Recently added" videos={videos} />
      )}
    </div>
  );
};

export default Home;
