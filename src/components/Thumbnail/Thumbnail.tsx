import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';

const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
`;

const ThumbnailContent = styled.div`
  text-align: left;
  color: #0f0f0f;
  text-decoration: none;

  h3 {
    font-size: 18px;
    margin: 8px 0;
    transition: color 0.2s ease;
  }

  p {
    margin: 8px 0;
    font-size: 12px;
    color: #525252;
  }
`;

const StyledLink = styled(Link)`
  width: 25%;
  min-width: 240px;
  padding: 8px;
  text-decoration: none;

  &:hover {
    h3 {
      color: #1D1DFF;
    }

    ${StyledImg} {
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    }
  }
`;

interface ThumbnailProps {
  id: string;
  src: string;
  alt: string;
  title: string;
  uploadDate: Date;
}

const Thumbnail = (props: ThumbnailProps) => {
  const { id, title, src, alt, uploadDate } = props;

  return (
    <StyledLink to={`/video/${id}`}>
      <StyledImg src={src} alt={alt} />
      <ThumbnailContent>
        <h3>{title}</h3>
        <p>Uploaded {moment(uploadDate).fromNow()}</p>
      </ThumbnailContent>
    </StyledLink>
  );
};

export default Thumbnail;
