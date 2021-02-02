import style from "styled-components";

export const Form = style.form`
  display: flex;
  margin-left:0.5rem;
  flex-direction: row;
  justify-content: center;
`;

export const Input = style.input`
  grid-area:search;
  width:230px;
  text-align:center;
  height:35px;
  border-radius:40px;
`;

export const Span = style.span`
 position:relative;
 top:10px;
 left:-220px;
 right:0px;
 color:black;
 font-size:1.2rem;
`;
