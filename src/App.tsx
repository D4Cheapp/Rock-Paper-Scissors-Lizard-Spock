import React from 'react';
import {DesktopOriginal} from "./pages/desktopOriginal";
import "./sass/index.sass";
import {RulesButton} from "./components/rulesButton";
import {Score} from "./components/Score";

function App() {
  return (
    <div className="App">
        <div className={"appBackground"}></div>
        <Score/>
            <DesktopOriginal/>
        <RulesButton/>
    </div>
  );
}

export default App;
