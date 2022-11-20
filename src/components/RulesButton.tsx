import {useState} from "react";
import Rules from "../images/image-rules.svg";
import BonusRules from "../images/image-rules-bonus.svg";
import Close from "../images/icon-close.svg";
import {useTypedSelector} from "../redux";

export function RulesButton(){
    const store = useTypedSelector(store => store.game.state)
    const [rulesState,setRulesState] = useState(false)
    return(
        <div>
            {rulesState &&
                <><div className="Blur" onClick={() => setRulesState(false)}></div>
                    <div className={"RulesWindow"}>
                        <p>RULES</p>
                        <button onClick={() => setRulesState(false)}><img src={Close} alt=""/></button>
                        <img className={"Rule"} src={store?BonusRules:Rules} alt=""/>
                    </div></>}
            <button className={"RulesButton"} onClick={() => setRulesState(true)}>
                RULES
            </button>
        </div>

    );
}