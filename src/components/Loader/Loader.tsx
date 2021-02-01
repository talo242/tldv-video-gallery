import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/tldv-logo.svg';

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loader = () => (
  <LoaderContainer>
    <img src={Logo} alt="logo" />
    Loading...
  </LoaderContainer>
);

export default Loader;
