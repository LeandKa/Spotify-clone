import * as types from "../types";
import { getTokenFromResponse } from "../../spotify";
import Spotify from "spotify-web-api-js";
const s = new Spotify();

export const getLogin = () => async (dispatch) => {
  const hash = getTokenFromResponse();
  window.location.hash = "";
  const token = hash.access_token;
  if (token) {
    localStorage.setItem("access_token", hash.access_token);
    s.setAccessToken(hash.access_token);
    dispatch({
      type: types.GET_TOKEN,
      payload: token
    });
    s.getPlaylist("37i9dQZEVXcFgUOwcjhf4t")
      .then(result => {
        dispatch({
          type: types.GET_LOGIN,
          payload: result
        });
      });
    dispatch(getPlaylist());
    dispatch(GetHeader());
  } else {
    const hash = localStorage.getItem("access_token");
    s.setAccessToken(hash);
    s.getPlaylist("37i9dQZEVXcFgUOwcjhf4t")
      .then(result => {
        dispatch({
          type: types.GET_LOGIN,
          payload: result
        });
      });
  }
};

export const GetHeader = () => async (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.getMe()
    .then(result => {
      const payload = {
        url: result.images[0].url,
        name: result.display_name
      };
      dispatch({
        type: types.GET_HEADER,
        payload: payload
      });
    });
};

export const getPlaylist = () => async (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.getUserPlaylists()
    .then(result => {
      dispatch({
        type: types.GET_PLAYLIST,
        payload: result.items
      });
    });
};

export const getPlaylistDetaits = (id) => async (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.getPlaylist(id)
    .then(result => {
      dispatch({
        type: types.GET_PLAYLIST_DETAILS,
        payload: result
      });
    });
}
;

export const setPlayer = (id) => async (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.play(
    {
      uris: [`spotify:track:${id}`],
      device_id: "320cd85e3313431de87bd71c6eff82128af3262b"
    }
  )
    .then(res => {
      s.getMyCurrentPlayingTrack()
        .then(res => {
          dispatch({
            type: types.GET_CURRENT_SONG,
            payload: res.item
          });
        });
    });
}
;

export const setPlayPlaylist = (id) => async (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.play(
    {
      context_uri: `spotify:playlist:${id}`,
      device_id: "320cd85e3313431de87bd71c6eff82128af3262b"
    }
  )
    .then(res => {
      s.getMyCurrentPlayingTrack()
        .then(res => {
          console.log(res);
          dispatch({
            type: types.GET_CURRENT_SONG,
            payload: res.item
          });
        });
    });
};

export const setPlay = () => (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.play({ device_id: "320cd85e3313431de87bd71c6eff82128af3262b" })
    .then(res => {
      dispatch({
        type: types.IS_PLAYING,
        payload: true
      });
    });
};

export const setPause = () => (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.pause({ device_id: "320cd85e3313431de87bd71c6eff82128af3262b" })
    .then(res => {
      dispatch({
        type: types.IS_PLAYING,
        payload: false
      });
    });
}
;

export const nextSong = () => (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.skipToNext()
    .then(res => {
      s.getMyCurrentPlayingTrack()
        .then(res => {
          console.log(res);
          dispatch({
            type: types.GET_CURRENT_SONG,
            payload: res.item
          });
        });
    });
};

export const previous = () => (dispatch) => {
  const hash = localStorage.getItem("access_token");
  s.setAccessToken(hash);
  s.skipToPrevious()
    .then(res => {
      s.getMyCurrentPlayingTrack()
        .then(res => {
          console.log(res);
          dispatch({
            type: types.GET_CURRENT_SONG,
            payload: res.item
          });
        });
    });
};
