import Logo from "../images/logo.svg";
import BonusLogo from "../images/logo-bonus.svg";
import {useTypedSelector} from "../redux";

export function Score(){
    const store = useTypedSelector(store => store.score)
    const state = useTypedSelector(store => store.game.state)

    return(
        <div className="ScoreForAll">
            <img src={state?BonusLogo:Logo} style={state?{marginLeft:0}:{marginLeft: "-2vh"}} alt=""/>
            <div className={"ScoreScore"}>
                <p className={"ScoreLogo"}>SCORE</p>
                <p className="ScorePoints" >{store.score}</p>
            </div>
        </div>
    );
}