import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  display: inline-block;
  width: calc((100% - 64px) / 4);
  height: 200px;
  object-fit: contain;
  margin: 8px
`;

interface ImgProps {
  src: string;
  alt: string;
}

const Img = (props: ImgProps) => {
  const { src, alt } = props;

  return <StyledImg src={src} alt={alt} />;
};

export default Img;
