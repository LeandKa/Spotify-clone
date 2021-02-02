
import * as types from "../types";

const initialState = {
  header: {},
  featured: [],
  playlistDetails: [],
  playlist: [],
  song: {},
  track: {},
  playIcon: false,
  play: false
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOGIN:
      return {
        ...state,
        featured: action.payload
      };
    case types.GET_PLAYLIST_DETAILS:
      return {
        ...state,
        playlistDetails: action.payload
      };
    case types.GET_HEADER:
      return {
        ...state,
        header: action.payload
      };
    case types.GET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload
      };
    case types.GET_CURRENT_SONG:
      return {
        ...state,
        track: action.payload,
        playIcon: true,
        play: true
      };
    case types.IS_PLAYING:
      return {
        ...state,
        playIcon: action.payload
      };
    default:
      return state;
  }
};

export default LoginReducer;
