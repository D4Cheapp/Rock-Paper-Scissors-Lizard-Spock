import {Choose} from "../components/Choose";
import Rules from "../images/image-rules.svg";
import "../sass/indexDesktop.sass";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";
import Rock from "../images/icon-rock.svg";

export interface RPSinterface{
    image:string,
    type:string,
    color:{borderColor:string}
}
const RPS:RPSinterface[] =[
    {
        image:Rock,
        type:"rock",
        color:{borderColor:"#DE405B"},
    },
    {
        image:Paper,
        type:"paper",
        color: {borderColor: "#5971F9"}
    },
    {
        image:Scissors,
        type:"scissors",
        color: {borderColor: "#ECA825"}
    }
]

const WhoBeats={
    "rock":["scissors"],
    "scissors":["paper"],
    "paper":["rock"]
}

export function Original(){
    return(
        <>
            <link rel="preload" as="image" href={Rules}/>
            <Choose RPS={RPS} WhoBeats={WhoBeats}/>
        </>
    );
}