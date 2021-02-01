import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { useDataProvider } from '../../utils/VideoDataProvider';
import Container from '../Container';
import Form from '../Form';
import { FormFields } from '../Form/Form';
import Button from '../Button';

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

const TitleContainer = styled.div`
  text-align: left;
`;

const VideoSingle = () => {
  const data = useDataProvider();
  const [edit, setEdit] = useState<boolean>(false);
  const { videoId } = useParams<{ videoId: string }>();

  const currentVideo = data.videos.find((video) => video._id === videoId);

  if (!currentVideo) {
    return <p>Video not found</p>;
  }

  const toggleEditForm = () => setEdit(!edit);

  const onSaveForm = (data: FormFields) => {
    
  };

  const defaultData = {
    title: currentVideo.Title,
    slug: currentVideo.slug,
  }

  return (
    <>
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
            <TitleContainer>
              <h1>{currentVideo.Title}</h1>
              <p>{currentVideo.slug}</p>
              <p>Uploaded {moment(currentVideo.createdAt).fromNow()}</p>
            </TitleContainer>
            <Button onClick={toggleEditForm}>Edit</Button>
          </ContentContainer>
        </Container>
      </div>
      {edit && <Form defaultData={defaultData} onSave={onSaveForm} onClose={toggleEditForm} />}
    </>
  );
};

export default VideoSingle;
