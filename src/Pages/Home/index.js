import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { WrapperGlobal, ContainerGlobal } from "../../Style";
import SideBar from "../../Components/SideBar/index";
import Footer from "../../Components/Footer/index";
import { useDispatch, useSelector } from "react-redux";
import PlaylistBody from "../../Components/PlaylistBody/index";
import { getLogin } from "../../store/action/GlobalAction";

export default function Home () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogin());
  }, []);

  const { featured } = useSelector(state => state.login);

  return (
    <WrapperGlobal>
      <ContainerGlobal>
        <SideBar></SideBar>
        <Wrapper>
          <PlaylistBody body={featured}></PlaylistBody>
        </Wrapper>
      </ContainerGlobal>
      <Footer></Footer>
    </WrapperGlobal>
  );
}
