import React from 'react';
import styled from 'styled-components';
import VideoResponse from '../../interfaces/videos/videos.interface';

// Components
import Thumbnail from '../Thumbnail';
import Container from '../Container'

interface VideoCarouselProps {
  videos: VideoResponse[];
  title?: string;
}

const VideoTitle = styled.h2`
  padding: 0 16px;
`;

const VideoCarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const VideoGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  width: 100%
`;

const VideoCarousel = (props: VideoCarouselProps) => {
  const { title, videos } = props;
  return (
    <Container>
      <VideoCarouselContainer>
        <VideoTitle>{title}</VideoTitle>
        <VideoGalleryContainer>
          {videos.map((video) => (
            <Thumbnail
              src={`${process.env.REACT_APP_API_URL}${video.thumbnail.formats.thumbnail.url}`}
              alt={video.Title}
            />
          ))}
        </VideoGalleryContainer>
      </VideoCarouselContainer>
    </Container>
  );
};

export default VideoCarousel;
