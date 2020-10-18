import React, { useState } from 'react';
import styled from "styled-components";
import ramona from "./Images/Ramona.png"
// import './CSS/Nav.css';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const NavBar = styled.div`
  background-color: rgba(222, 225, 230, 0.774);
  height: 15vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 10px;
  padding-right: 10px;
`;

const Quote = styled.div`
  min-width: 33vw;
  max-width: 66vw;
  padding-bottom: 56.25%;
  text-align: right;
`;

const Splash = styled.div`
  background-image: url(${ramona});
  background-repeat: no-repeat;
  background-size: contain;
  height: 0;
  min-width: 100vw;
  padding-top: 56.25%;
  display: flex;
  align-items: center;
`;


const Nav = () => {
    const contact = "https://www.schedulista.com/schedule/mantismassage1/choose_time?provider_id=1073881022&service_id=1073958799"
    const [viewToggle, setViewToggle] = useState(true);

    function viewNav(){
        setViewToggle(prev => !prev)
        console.log(viewToggle)
    }

    return (
        <NavContainer>

            <Splash>
                <Quote>
                    "No worries, I got your back." <br/>
                    - Abraham Lincoln
                </Quote>

            </Splash>
            <NavBar>
                <div onClick={viewNav}>RB</div>
                <div>Technique</div>
                <a href={contact} target="_blank">Book a Massage</a>
                <div>Contact</div>
                <div> Soc   Soc</div>
            </NavBar>
            
        </NavContainer>
    );
}

export default Nav;
