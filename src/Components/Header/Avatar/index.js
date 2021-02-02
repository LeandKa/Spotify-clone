import React from "react";
import { Div } from "./style";
import proptypes from "prop-types";

export default function Avatar ({ img, name }) {
  return (
    <Div>
      <img src={img} alt='avatar'></img>
      <h4>{name}</h4>
    </Div>
  );
}

Avatar.propTypes = {
  name: proptypes.string,
  img: proptypes.string
};
