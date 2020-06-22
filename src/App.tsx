import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./containers/Main";
import Settings from "./containers/Settings";
import Levels from "./containers/Levels";
import "./App.css";
import MusicPlayer from "./shared/MusicPlayer";
import { getMusic } from "containers/Main/store/selectors";
import { useSelector } from "react-redux";

function App() {
  const musicSelector = useSelector(getMusic);

  return (
    <div className="App">
      <MusicPlayer music={musicSelector} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/settings" component={Settings} />
        <Route path="/level" component={Levels} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
