import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {motion} from "framer-motion";

import {decScore, incScore} from "../redux/ScoreReducer";

const variants = {
    show:{opacity: 1, transition: {duration: .3}},
    hide:{opacity:0,transition:{duration: .3}}
}

export function Game(props:any){
    const {RPS,WhoBeats} = props
    const dispatch = useDispatch()

    const {image,color,type} = props.object
    const random = props.random

    const [result,setResult] = useState("");
    const [isEnd,setEnd] = useState("start")

    const [animationEnd,setAnimationEnd] = useState(false);
    const [activeItem,setActiveItem] = useState(RPS[0])

    useEffect(()=>{
        let i = 0;
        const interval = setInterval(()=> {if (i < 3){setActiveItem(RPS[i]);i++}
        else {clearInterval(interval); setTimeout(()=>setAnimationEnd(true),0)}},800)

    },[])
    useEffect(()=>{
        if (animationEnd) resultCount()
    },[animationEnd])

    function resultCount(){
        if (RPS[random] === props.object) setResult("DRAW")
        // @ts-ignore
        else if (WhoBeats[type].includes(RPS[random].type)){
            setResult("WIN")
            dispatch(incScore())
        }else {
            setResult("LOSE")
            dispatch(decScore())
        }
    }

    return (
        <>
            {!animationEnd &&
                <motion.div animate={{y:"50vh"}}>
                    <motion.div animate={{rotate:-25,x:"-10vw",y:"-15vh"}} transition={{yoyo:Infinity,duration:.38}} initial={{scale:1.5}}  style={activeItem.color} className={"Choice_Button playing"}>
                        <img src={activeItem.image} alt=""/>
                    </motion.div>
                    <motion.div animate={{rotate:25,x:"10vw",y:"-15vh"}} transition={{yoyo:Infinity,duration:.38}} initial={{scale:1.5}} style={activeItem.color} className={"Choice_Button host"}>
                        <img src={activeItem.image} alt=""/>
                    </motion.div>
                </motion.div>

            }
            {animationEnd &&
            <motion.div onAnimationComplete={() => isEnd === "end" ? props.game(false):null} variants={variants} animate={isEnd === "end" ? "hide": "show"} initial={{opacity:0}}>
                <div style={color} className={result === "WIN" ? "Choice_Button playing Circles" : "Choice_Button playing"}>
                    <img src={image} alt=""/>
                </div>
                <div className={"GameResult"}>
                    <p className={"GameResultText"}>{result}</p>
                    <button onClick={() => setEnd("end")} className={"PlayAgainButton"}>PLAY AGAIN</button>
                </div>
                <div style={RPS[random].color} className={result === "LOSE" ? "Choice_Button host Circles" : "Choice_Button host"}>
                    <img src={RPS[random].image} alt="" />
                </div>
            </motion.div>
            }

        </>
    );
}