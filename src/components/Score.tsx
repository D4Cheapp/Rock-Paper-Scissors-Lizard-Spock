import Logo from "../images/logo.svg";
import {useTypedSelector} from "../redux";

export function Score(){
    const store = useTypedSelector(store => store.score)
    // const dispatch = useDispatch()
    return(
        <div className="ScoreForAll">
            <img src={Logo} alt=""/>
            <div className={"ScoreScore"}>
                <p className={"ScoreLogo"}>SCORE</p>
                <p className="ScorePoints" >{store.score}</p>
            </div>
            {/*<button onClick={() => dispatch(incScore())}>Set</button>*/}
        </div>
    );
}