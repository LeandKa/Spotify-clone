import React, { Fragment } from "react";
import {
  Wrapper,
  Controls,
  Current,
  Progress,
  ProgressSlider,
  Time,
  Volume
} from "./style";
import { setPlay, setPause, nextSong, previous } from "../../store/action/GlobalAction";
import { useSelector, useDispatch } from "react-redux";

export default function Player () {
  const { track, play, playIcon } = useSelector(state => state.login);
  const dispatch = useDispatch();

  const onClick = () => {
    if (playIcon) {
      dispatch(setPause());
    } else {
      dispatch(setPlay());
    }
  };

  const onNext = () => {
    dispatch(nextSong());
  };

  const OnPrevious = () => {
    dispatch(previous());
  };

  return (
    <Wrapper>
      <Current>
          {play
            ? (
              <Fragment>
                {track ? (<img src={track?.album.images[0].url}></img>) : (<img src='/'></img>)}
             <div>
             <span>{track.name}</span>
             <small>{track.artists.map((artist) => artist.name).join(", ")}</small>
           </div>
           </Fragment>
              )
            : (
              <Fragment>
            <div>
              <span>...</span>
              <small>..</small>
            </div>
            </Fragment>
              )
          }
      </Current>

      <Progress>
        <Controls>
          <button type='button'>
            <img src='../assets/images/shuffle.svg'></img>
          </button>
          <button type='button' onClick={OnPrevious}>
            <img src='../assets/images/backward.svg'></img>
          </button>
          {
            playIcon
              ? (<button type='button' onClick={onClick}>
            <img src='../assets/images/pause.svg'></img>
          </button>)
              : (<button type='button' onClick={onClick}>
            <img src='../assets/images/play.svg'></img>
          </button>)
          }
          <button type='button' onClick={onNext}>
            <img src='../assets/images/forward.svg'></img>
          </button>
          <button type='button'>
            <img src='../assets/images/repeat.svg'></img>
          </button>
        </Controls>
        <Time>
          <span>dsds</span>
          <ProgressSlider>
            <span>duration</span>
          </ProgressSlider>
        </Time>
      </Progress>

      <Volume>
        <img src='../assets/images/volume.svg' alt='volume'/>
      </Volume>
    </Wrapper>
  );
}
