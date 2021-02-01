import Thumbnail from "../thumbnail/thumbnail.interface";
import VideoFile from "./videofile.interface";

interface VideoResponse {
  _id: string;
  isPublic: boolean;
  Title: string;
  file: VideoFile;
  thumbnail: Thumbnail;
}

export default VideoResponse;
