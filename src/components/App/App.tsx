import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../tldv-logo.svg';
import './App.css';
import { getVideos } from '../../api';
import VideoResponse from '../../interfaces/videos/videos.interface';
import VideoCarousel from '../VideoCarousel';
import Container from '../Container';

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  background-color: #f9f9f9;
`;

const Logo = styled.img`
  width: 80px;
  margin: 16px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: Fraunces, serif;
  margin: 16px;
`;

const Content = styled.div`
  padding-top: 80px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
    <div className='App'>
      <Header>
        <Container>
          <InnerContainer>
            <Logo src={logo} alt='logo' />
            <Title>Video Gallery</Title>
          </InnerContainer>
        </Container>
      </Header>
      <Content>
        {videos.length > 0 && (
          <VideoCarousel title='Recently added' videos={videos} />
        )}
      </Content>
    </div>
  );
}

export default App;
