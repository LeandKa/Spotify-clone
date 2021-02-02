import style from "styled-components";

export const Container = style.div`
   display: flex;
  flex-direction: column;
  flex: 0.2;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 230px;
  height: 100vh;
  color: white;
  background-color: #040404;
`;
export const Title = style.a`
margin-left: 10px;
margin-top:1.0rem;
margin-bottom:2.0rem;
text-decoration:none;
color:white;
cursor:pointer;
  padding: 5px;
  font-size: 12px;
  &:hover{
     opacity:0.6;
  }
`;

export const Option = style.div`
 display: flex;
  cursor: pointer;
  align-items: center;
  height: 30px;

  color: grey;
  transition: 200ms color ease-in;
  &:hover{
     color:white;
  }
`;

export const Hr = style.hr`
border: 1px solid #282828;
width: 90%;
margin: 10px auto;
`;

export const P = style.a`
margin-top: 5px;
  margin-left: 20px;
  text-decoration:none;
  font-size: 10px;
  color:white;
`;
