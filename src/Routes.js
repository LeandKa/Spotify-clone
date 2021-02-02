import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/index";
import Playlist from "./Pages/PlaylistDetails/index";
import Login from "./Pages/Login/index";

export default function Routes () {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/playlist/:id' exact component={Playlist}></Route>
        </Switch>
      </BrowserRouter>
  );
}
