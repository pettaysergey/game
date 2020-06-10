import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./containers/Main";
import Settings from "./containers/Settings";
import "./App.css";

function App() {
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    // (audioRef as any).current.play();
  }, []);
  return (
    <div className="App">
      <audio ref={audioRef}>
        <source
          src={"https://www.bensound.com/bensound-music/bensound-buddy.mp3"}
          type="audio/ogg"
        />
        Your browser does not support the audio element.
      </audio>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/settings" component={Settings} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
