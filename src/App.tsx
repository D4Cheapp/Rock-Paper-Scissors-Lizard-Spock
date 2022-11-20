import React from 'react';
import {Original} from "./pages/Original";
import "./sass/index.sass";
import {RulesButton} from "./components/RulesButton";
import {Score} from "./components/Score";
import {Bonus} from "./pages/Bonus";
import {useTypedSelector} from "./redux";



function App() {
    const store = useTypedSelector(state => state.game.state)
    return (
    <div className="App">
        <div className={"appBackground"}></div>
        <Score/>
           { store ? <Bonus/>: <Original/>}
        <RulesButton/>
    </div>
  );
}

export default App;
