import Triangle from "../images/bg-triangle.svg";
import Pentagon from "../images/bg-pentagon.svg";
import {useState} from "react";
import {RPSinterface} from "../pages/Original";
import {Game} from "./Game";
import {useDispatch} from "react-redux";
import {toggleGame} from "../redux/GameStateReducer";
import {useTypedSelector} from "../redux";

interface PropsInt{
    RPS:RPSinterface[];
    WhoBeats:object
}

export function Choose({RPS,WhoBeats}:PropsInt){
    const [gameStarted,setGameStarted] = useState(false);
    const [picked,setPicked] = useState("none");

    const dispatch = useDispatch();
    const store = useTypedSelector(store => store.game.state)

    function CreateChoice(props:any){
        const {image,color,type} = props.object;
        return(
            <div className={store?"Pentagon_locate":"Triangle_locate"}>
                <div style={color} className={`Choice_Button ${type}`} onClick={() => {setPicked(type);setGameStarted(true)}}>
                    <img src={image} alt={type} id={type}/>
                </div>
            </div>
        );
    }
    return(
        <>
            {!gameStarted &&
            <>
                <div className="Tumbler">
                    <button onClick={()=>dispatch(toggleGame())}>{store?"ORIGINAL":"BONUS"}</button>
                </div>
                <div className={"ChoiceRPS"}>
                    <img src={store ? Pentagon:Triangle}  alt="" className={store ?"ChoiceRPS_Pentagon":"ChoiceRPS_Triangle"}/>
                    {RPS.map(i => <CreateChoice key={i.type} object={i} start={setGameStarted} picked={setPicked}/>)}
                </div>
            </>}
            {gameStarted &&
            <div className={"Game"}>
                {RPS.map(i => i.type === picked ? <Game key={i.type} object={i} game={setGameStarted}
                        random={ Math.floor(Math.random() * RPS.length)} RPS={RPS} WhoBeats={WhoBeats}/>: null)}
            </div>}
        </>
    );
}