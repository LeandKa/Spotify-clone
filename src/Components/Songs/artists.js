import React from "react";
import Proptypes from "prop-types";
import { P } from "./style";

export default function artists ({ artist, albumName }) {
  const GetArtist = () => {
    if (!artist) {
      return (null);
    }
    return (
       <P>
         {artist.map((artist) => artist.name).join(", ")} -{" "}
         {albumName}
       </P>
    );
  };

  return (
   <GetArtist></GetArtist>
  );
}

artists.propTypes = {
  artist: Proptypes.array,
  albumName: Proptypes.string
};
