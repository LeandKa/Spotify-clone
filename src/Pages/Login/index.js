import React from "react";
import { Wrapper, A, Title } from "./style";
import { accessUrl } from "../../spotify";

export default function Login () {
  return (
   <Wrapper>
     <img src='../logos/02_CMYK/02_PNG/Spotify_Logo_CMYK_White.png' alt='logo'/>
     <Title>Login</Title>
     <A href={accessUrl}>Sign In</A>
   </Wrapper>
  );
}
