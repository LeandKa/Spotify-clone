import React from "react";
import { PlaylistHeader, Actions, SpanCircle, SpanHeart, SpanShare } from "./style";

import Songs from "../Songs/index";
import Img from "./Img";
import { useDispatch } from "react-redux";
import Header from "../Header/index";
import { setPlayPlaylist } from "../../store/action/GlobalAction";

export default function index ({ body }) {
  const dispatch = useDispatch();

  const GetSongs = () => {
    if (!body.tracks) {
      return (null);
    }
    return (
      <div>
        {
        body.tracks.items.map((item, index) => (
          <Songs key={index} track={item}></Songs>
        ))
      }
      </div>
    );
  };

  const OnPlayPlaylist = (id) => {
    dispatch(setPlayPlaylist(id));
  };

  return (
    <div style={{ overflowY: "scroll", height: "100%" }}>
      <Header></Header>
      <PlaylistHeader>
      <Img img={body?.images}></Img>
              <div>
                <span>Playlist</span>
                <h1>{body.name}</h1>
                <p>{body.description}</p>
              </div>
            </PlaylistHeader>
            <Actions>
              <SpanCircle onClick={() => OnPlayPlaylist(body.id)}></SpanCircle>
              <SpanHeart></SpanHeart>
              <SpanShare></SpanShare>
            </Actions>
            <GetSongs></GetSongs>
    </div>
  );
}
