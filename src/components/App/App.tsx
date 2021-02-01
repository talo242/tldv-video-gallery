import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../../assets/tldv-logo.svg';
import './App.css';
import { useDataProvider } from '../../utils/VideoDataProvider';
// Components
import Loader from '../Loader';
import Container from '../Container';
import Home from '../Home';
import VideoSingle from '../VideoSingle';

const Header = styled.header`
  border-top: 1px solid #1D1DFF;
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
  const data = useDataProvider();
  if (data.status === 'LOADING') {
    return <Loader />;
  } else if (data.status === 'ERROR') {
    return <p>Error loading videos</p>;
  }

  return (
    <Router>
      <div className="App">
        <Header>
          <Container>
            <InnerContainer>
              <Link to="/">
                <Logo src={logo} alt="logo" />
              </Link>
              <Title>Video Gallery</Title>
            </InnerContainer>
          </Container>
        </Header>
        <Content>
          <Switch>
            <Route path="/video/:videoId"><VideoSingle /></Route>
            <Route path="/">
              <Home videos={data.videos} />
            </Route>
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;
