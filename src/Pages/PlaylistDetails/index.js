import React, { useEffect } from "react";
import {
  Wrapper
} from "./style";
import { useParams } from "react-router-dom";
import { WrapperGlobal, ContainerGlobal } from "../../Style";
import SideBar from "../../Components/SideBar/index";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import PlaylistBody from "../../Components/PlaylistBody/index";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistDetaits } from "../../store/action/GlobalAction";

export default function Playlist () {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylistDetaits(id));
  }, []);

  const { playlistDetails } = useSelector(state => state.login);

  return (
    <WrapperGlobal>
      <ContainerGlobal>
        <SideBar></SideBar>
          <Wrapper>
          <Header></Header>
          <PlaylistBody body={playlistDetails}></PlaylistBody>
          </Wrapper>
      </ContainerGlobal>
      <Footer></Footer>
    </WrapperGlobal>
  );
};
