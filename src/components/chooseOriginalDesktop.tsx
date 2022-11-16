import Triangle from "../images/bg-triangle.svg";
import {useState} from "react";
import {RPS} from "../pages/desktopOriginal";
import {GameOriginalDesktop} from "./GameOriginalDesktop";


export function ChooseOriginalDesktop(){
    const [gameStarted,setGameStarted] = useState(false);
    const [picked,setPicked] = useState("none");

    function CreateChoice(props:any){
        const {image,color,type} = props.object;
        return(
            <div style={color} className={`Choice_Button ${type}`} onClick={() => {setPicked(type);setGameStarted(true)}}>
                <img src={image} alt={type} id={type}/>
            </div>
        );
    }

    return(
            <>
                {!gameStarted &&
                <div className={"ChoiceRPS"}>
                    <img src={Triangle} alt="" className={"ChoiceRPS_Triangle"}/>
                    {RPS.map(i => <CreateChoice key={i.type} object={i} start={setGameStarted} picked={setPicked}/>)}
                </div>}
                {gameStarted &&
                <div className={"Game"}>
                    {RPS.map(i => i.type === picked ? <GameOriginalDesktop key={i.type} object={i} game={setGameStarted}/>: null)}
                </div>}
            </>
    );
}