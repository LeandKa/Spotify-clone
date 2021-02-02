import React, { useEffect } from "react";
import Proptypes from "prop-types";
import { ImgPlaylist } from "./style";

export default function Img ({ img }) {
  useEffect(() => {
    GetImg();
  }, [img]);

  const GetImg = () => {
    if (!img) {
      return (null);
    }
    const element = img.find((el, i) => i === 0);

    if (element) {
      return (<ImgPlaylist src={element.url} alt='avatarPlaylist'></ImgPlaylist>);
    }
  };

  return (
      <div>
         <GetImg></GetImg>
      </div>
  );
}

Img.propTypes = {
  img: Proptypes.array
};
