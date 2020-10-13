import React from 'react';
import styled from "styled-components";

const MContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    text-align: center;
`;

const Technique = styled.div`
    flex: 1;
    border: 1px pink dotted;
`;

const Carosel = styled.div`
    flex: 1;
    border: 1px green dotted;
`;

const Motion = () => {
    return (
        <MContainer>
            <Technique>Techniques</Technique>
            <Carosel>Carosel</Carosel>
        </MContainer>
    );
}

export default Motion;
