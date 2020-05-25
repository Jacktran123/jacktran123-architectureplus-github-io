import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const Nav=styled.nav`
  font-size: 100%;
  max-width: 1400px;
  border-bottom: 1px solid black;
  background: rgb(249,250,250);
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  padding-top: 1em;
  padding-bottom: 0.5em;
  position: sticky;
  z-index: 1;
  top: -1px;

  
    @media(max-width: 600px){
        justify-content: space-evenly;
        padding-left: 1em;
        
      
    }
`;


const Title=styled.a`
    margin-left: 0.2em;
    font-size: 2.2rem;
    color: black;
    text-decoration: none;
`;


const List=styled.div`
    text-decoration: none;
    font-weight: 600;
    font-size: 1.4rem;
    display: flex;
    color: black;
    
    @media(max-width: 600px){
        flex-direction: column;
        font-size: 1rem;
        
    }
    a {
        margin-right: 1.5em;
        padding-bottom: 0;
        position: relative;
        &::after{
            content: "";
            position: absolute;
            display: none;
            top: 25px;
            left: 0;
            width: 100%;
            height: 3px;
            background: red;
        }
        &:hover{
            cursor: pointer;
        }
        &:hover::after{
            display: block;
           
        }
        @media(max-width: 600px){
         margin-right: 0;
        padding-right: 1em;
            &:hover::after{
                top: 14.5px;
            }
        }
        
       
        
    }
    
`;

const Header= props =>{
   

    return(
        <Nav>
            <Title  href='index.html'>Architecture +</Title>
             
             <List className='hidden-menu'>
               <a >About</a>
               <a>Gallery</a>
               <a>Contact</a>
              </List>
            
        </Nav>
    );
}

export default Header;