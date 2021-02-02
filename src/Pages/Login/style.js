import style from "styled-components";

export const Wrapper = style.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-self:center;
   width:100%;
   height:100%;
   img{
     width:250px;
     height:100px;
     align-self:center;
   }
`;

export const Title = style.h1`
   color:white;
   font-size:2.0rem;
   align-self:center;
   margin-top:0.5rem;
   margin-bottom:0.5rem;
`;

export const A = style.a`
    align-self:center;
    cursor:pointer;
    text-align:center;
    color:white;
    padding:1.0rem;
    border-radius:90px;
    text-decoration:none;
    margin-top:1.0rem;
    background-color: #1DB954;
    &:hover{
       color:black;
    }
`;
