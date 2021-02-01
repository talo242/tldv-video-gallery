import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { useDataProvider } from '../../utils/VideoDataProvider';
import Container from '../Container';
import Form from '../Form';
import { FormFields } from '../Form/Form';
import Button from '../Button';
import { putVideo } from '../../api';

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

const TitleInnerContainer = styled.div`
  display: flex;
  align-items: baseline;

  p {
    margin-left: 8px;
    color: #b9b9b9;
  }
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

  const onSaveForm = async (data: FormFields) => {
    putVideo(videoId, data).then(() => {
      toggleEditForm()
      window.location.reload();
    });
  };

  const defaultData = {
    Title: currentVideo.Title,
    Slug: currentVideo.Slug,
  };

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
              <TitleInnerContainer>
                <h1>{currentVideo.Title}</h1>
                <p>{currentVideo.Slug}</p>
              </TitleInnerContainer>
              <p>Uploaded {moment(currentVideo.createdAt).fromNow()}</p>
            </TitleContainer>
            <Button onClick={toggleEditForm}>Edit</Button>
          </ContentContainer>
        </Container>
      </div>
      {edit && (
        <Form
          defaultData={defaultData}
          onSave={onSaveForm}
          onClose={toggleEditForm}
        />
      )}
    </>
  );
};

export default VideoSingle;
