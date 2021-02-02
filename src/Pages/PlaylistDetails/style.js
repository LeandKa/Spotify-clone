import style from "styled-components";
import { FaPlayCircle, FaHeart, FaShare } from "react-icons/fa";

export const Wrapper = style.div`
padding: 30px;
width: 100%;
height: 100vh;
overflow-y: overlay;
flex: 1.0;
color: white;
background: linear-gradient(transparent, rgba(0, 0, 0, 1));
background-color: rgb(91, 87, 115);
`;

export const PlaylistHeader = style.div`
   display:Flex;
   flex-direction:row;
   height:200px;
   margin-top:1.0rem;
   img{
      width:200px;
      height:200px;
   }

   div{
     display:flex;
     flex-direction:column;
     justify-content:center;
     width:auto;
     margin-left:1.0rem;

     span{
       
     }

     h1{
       font-size:50px;
     }

     p{
       font-size:12px;
     }

   }
`;

export const Actions = style.div`
  display:flex;
  flex-direction:none;
  margin-left:2.0rem;
  margin-top:3.0rem;
  margin-bottom:2.0rem;
  text-align:center;
`;

export const SpanCircle = style(FaPlayCircle)`
  color:green;
  font-size:60px;
  margin-right:1.0rem;
`;

export const SpanHeart = style(FaHeart)`
   font-size:20px;
   margin-top:1.0rem;
   margin-right:1.0rem;
   color:green;
`;

export const SpanShare = style(FaShare)`
   font-size:20px;
   margin-top:1.0rem;
   color:white;
   margin-right:1.0rem;
`;
