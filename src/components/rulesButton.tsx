import {useState} from "react";
import Rules from "../images/image-rules.svg";
import Close from "../images/icon-close.svg";

export function RulesButton(){
    const [rulesState,setRulesState] = useState(false)
    return(
        <div>
            {rulesState &&
                <><div className="Blur" onClick={() => setRulesState(false)}></div>
                    <div className={"RulesWindow"}>
                        <p>RULES</p>
                        <button onClick={() => setRulesState(false)}><img src={Close} alt=""/></button>
                        <img className={"Rule"} src={Rules} alt=""/>
                    </div></>}
            <button className={"RulesButton"} onClick={() => setRulesState(true)}>
                Rules
            </button>
        </div>

    );
}