import React from 'react';
import styled from "styled-components";
import { IoIosContact } from 'react-icons/io';
import { AiOutlineHome, AiFillAndroid, AiFillCamera } from "react-icons/ai"

const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 75px;
  z-index: 1;
  top: 3.4em;
  background-color: #222;
  overflow-x: hidden;
  padding-top: 10px;
  text-align: center;
  .icon{
      padding-top: 2em;
  }
`;

const SideNav = ()=>{
    return(
        <StyledSideNav>
          <div className="icon"><AiOutlineHome size={45} color="#9FFFCB"/></div>
          <div className="icon"><IoIosContact size={45} color="#9FFFCB"/></div> 
          <div className="icon"><AiFillCamera size={45} color="#9FFFCB"/></div>
          <div className="icon"><AiFillAndroid size={45} color="#9FFFCB"/></div>         
        </StyledSideNav>
    );
}

export default SideNav;