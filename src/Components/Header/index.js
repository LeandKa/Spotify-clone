import React, { useEffect } from "react";
import Search from "./Search/index";
import Avatar from "./Avatar/index";
import { Wrapper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { GetHeader } from "../../store/action/GlobalAction";

export default function Header () {
  const { header } = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetHeader());
  }, []);

  return (
    <Wrapper>
       <Search></Search>
       <Avatar name={header.name} img={header.url} ></Avatar>
    </Wrapper>
  );
}
