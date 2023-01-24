import styled from "styled-components";

import React from 'react'
import ImageSlider from "./ImageSlider";

const Home = (props) => {
    return (
        <Container>
            <ImageSlider/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vh + 5px);

    &:after{
        background-image: url("/images/home-background.png");
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Home