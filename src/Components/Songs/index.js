import Proptypes from "prop-types";
import React from "react";
import { Container, Div, H1 } from "./style";
import Img from "./Img";
import Artists from "./artists";
import { useDispatch } from "react-redux";
import { setPlayer } from "../../store/action/GlobalAction";

export default function Songs ({ track }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setPlayer(track.track.id));
  };

  return (
     <Container onClick={onClick}>
       <Img img={track.track.album.images}></Img>
       <Div>
         <H1>{track.track.name}</H1>
           <Artists artist={track.track.artists} albumName={track.track.album.name} ></Artists>
       </Div>
     </Container>
  );
};

Songs.propTypes = {
  track: Proptypes.object
};
