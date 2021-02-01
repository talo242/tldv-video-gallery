import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import VideoResponse from '../../interfaces/videos/videos.interface';
import Container from '../Container';

interface VideoSingleProps {
  videos: VideoResponse[];
}

const VideoContainer = styled.div`
  background-color: black;
  heigh: 90vh;
`;

const StyledVideo = styled.video`
  width: 100%;
  max-width: 1200px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const VideoSingle = (props: VideoSingleProps) => {
  const { videos } = props;
  const { videoId } = useParams<{ videoId: string }>();

  const currentVideo = videos.find((video) => video._id === videoId);

  if (!currentVideo) {
    return <p>Video not found</p>;
  }

  return (
    <div>
      <VideoContainer>
        <StyledVideo width="100%" height="auto" controls>
          <source
            src={`${process.env.REACT_APP_API_URL}${currentVideo.file.url}`}
            type={currentVideo.file.mime}
          />
          Your browser does not support the video tag.
        </StyledVideo>
      </VideoContainer>
      <Container>
        <ContentContainer>
          <h1>{currentVideo.Title}</h1>
          <p>Uploaded {moment(currentVideo.createdAt).fromNow()}</p>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default VideoSingle;
