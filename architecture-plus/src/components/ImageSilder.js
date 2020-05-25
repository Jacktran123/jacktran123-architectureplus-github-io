import React from 'react';
import styled from 'styled-components';

const Image=styled.img`
    width: 100%;
    height: clamp(30vh,70vh);
    height: 20%;
    position: relative;
    top: -70px;
    z-index: -1;

   

`;

const ImageText=styled.h2`
    color: white;
    position: absolute;
    left: 4%;
    text-transform: capitalize;
    letter-spacing: 0.2em;
    top: 80px;
    font-size: max(1.4rem,3vw);
    font-family: San-serif;
    z-index: 0;

    @media (max-width: 500px){
        background: white;
        color: black;
        opacity: 0.7;

    }   
`;

const ImageSlider = props =>{
    return(
    <> 
    <ImageText>Explore the modern luxury</ImageText>
    <Image src='/images/img-slider-1.jpg' />
    </>
    );
};

export default ImageSlider;