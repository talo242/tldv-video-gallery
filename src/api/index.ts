import axios, { AxiosError } from 'axios';
import VideoResponse from '../interfaces/videos/videos.interface';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getVideos = async () => {
  try {
    const response = await client.get<Array<VideoResponse>>('/videos');
    return response.data;
  } catch (err) {
    if (err && err.response) {
      const axiosError = err as AxiosError;
      return axiosError.response?.data;
    }

    throw err;
  }
};

