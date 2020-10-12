import Contact from './Contact';
import Motion from './Motion';
import Nav from './Nav';
import React from 'react';
import styled from "styled-components";
// import './CSS/App.css';

const Body = styled.div`
  text-align: center;
  // color: white;
`;


function App() {
  return (
    <Body >
      <Nav />
      <Motion />
      <Contact />
    </Body>
  );
}

export default App;
