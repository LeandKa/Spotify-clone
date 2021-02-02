import style from "styled-components";
import { FaPlayCircle, FaHeart, FaShare } from "react-icons/fa";

export const PlaylistHeader = style.div`
   display:Flex;
   flex-direction:row;
   height:200px;
   margin-top:1.0rem;
   
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

export const ImgPlaylist = style.img`
  width:200px;
  height:200px;
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
  cursor:pointer;
  margin-right:1.0rem;
  &:hover{
    color:white;
  }
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
