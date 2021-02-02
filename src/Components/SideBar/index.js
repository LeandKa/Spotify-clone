import React, { useEffect } from "react";
import { Container, Hr, Option, P, Title } from "./style";
import { getPlaylist } from "../../store/action/GlobalAction";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar () {
  const { playlist } = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylist());
  }, []);

  return (
    <Container>
      <Title href='/home'>Navegar</Title>
      <Option>Principal</Option>
      <Option>Descobertas</Option>
      <Option>Sua galeria</Option>

      <Hr></Hr>
      <Title>Playlists</Title>
      <Hr></Hr>
      {
          playlist.map(userPlaylist => (
            <Option key={userPlaylist.id}>
              <P href={`/playlist/${userPlaylist.id}`}>{userPlaylist.name}</P></Option>
          ))
        }

    </Container>
  );
}
