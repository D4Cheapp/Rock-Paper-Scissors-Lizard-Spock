import {ChooseOriginalDesktop} from "../components/chooseOriginalDesktop";
import Rules from "../images/image-rules.svg";
import "../sass/desktop/indexDesktop.sass";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";
import Rock from "../images/icon-rock.svg";

export const RPS =[
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
        image:Rock,
        type:"rock",
        color:{borderColor:"#DE405B"},
    }
]

export function DesktopOriginal(){
    return(
        <>
            <link rel="preload" as="image" href={Rules}/>
            <ChooseOriginalDesktop/>
        </>
    );
}