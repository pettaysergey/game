import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./containers/Main";
import Settings from "./containers/Settings";
import "./App.css";
import MusicPlayer from "./shared/MusicPlayer";
import { musicSelector } from "containers/Main/store/selectors";
import { useSelector } from "react-redux";

function App() {
  const getMusic = useSelector(musicSelector);

  return (
    <div className="App">
      <MusicPlayer music={getMusic} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/settings" component={Settings} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
