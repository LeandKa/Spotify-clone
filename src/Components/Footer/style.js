import style from "styled-components";

export const Wrapper = style.div`
position: fixed;
display: flex;
justify-content: space-between;
bottom: 0;
padding: 20px;
height: 65px;
width:100%;
background-color: #282828;
`;

export const Current = style.div`
  display:flex;
  align-items:center;
  width:220px;
  img{
     width:48px;
     height:48px;
  }

  div{
     margin-left:12px;
     display:flex;
     flex-direction:column;
  }

  span{
     font-size:13px;
     width:300px;
     color:#fff;
  }

  small{
     font-size:11px;
     color: #b3b3b3;
     margin-top:5px;
  }
`;

export const Progress = style.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   width:483px;
`;

export const Controls = style.div`
  display:flex;
  align-items:center;

  button{
     background:transparent;
     border:0;
     margin 0 15px;
  }
`;

export const Time = style.div`
  display:flex;
  align-items:center;
  margin-top:5px;

  span{
     font-size:11px;
     color:#b3b3b3;
     width:20px;
  }
`;

export const ProgressSlider = style.div`
  width:483px;
  margin 0 15px;
`;

export const Volume = style.div`
  display:flex;
  align-items:center;
  width:100px;
  margin-right:20px;

  img{
     margin-right:5px;
  }
`;
