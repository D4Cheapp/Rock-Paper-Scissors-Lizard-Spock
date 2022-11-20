import "../sass/indexDesktop.sass";
import {RPSinterface} from "./Original";

import Rock from "../images/icon-rock.svg";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";
import Lizard from "../images/icon-lizard.svg";
import Spock from "../images/icon-spock.svg";

import Rules from "../images/image-rules-bonus.svg";
import {Choose} from "../components/Choose";

export const RPSLS:RPSinterface[]=[
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
    },
    {
        image:Lizard,
        type:"lizard",
        color:{borderColor: "#8F5CE5"}
    },
    {
        image:Spock,
        type:"spock",
        color:{borderColor: "#4ABDD2"}
    }
]
const WhoBeats={
    "rock":["scissors","lizard"],
    "scissors":["paper","lizard"],
    "paper":["rock","spock"],
    "lizard":["paper","spock"],
    "spock":["rock","scissors"]
}
export function Bonus(){
    return(
        <div>
            <link rel="preload" as="image" href={Rules}/>
            <Choose RPS={RPSLS} WhoBeats={WhoBeats}/>
        </div>
    );
}