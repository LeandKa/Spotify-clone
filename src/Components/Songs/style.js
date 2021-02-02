import style from "styled-components";

export const Container = style.div`
margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  color: white;
  z-index: 1;
  margin: 20px -30px;

  &:hover{
    cursor: pointer;
  background-color: black;
  opacity: 0.8;
  }
`;

export const ImgPlaylist = style.img`
margin-left:1.0rem;
height: 60px;
  width: 60px;
`;

export const Div = style.div`
margin-left: 20px;
`;

export const H1 = style.h1`
font-size: 16px;

`;

export const P = style.p`
font-size: 14px;
margin-top: 3px;
color: gray;
`;
