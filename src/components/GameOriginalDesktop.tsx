import {RPS} from "../pages/desktopOriginal";
import {useEffect} from "react";

export function GameOriginalDesktop(props:any){
    const {image,color} = props.object

    const random = Math.floor(Math.random() * 3);

    if (RPS[random] === props.object) console.log("Draw");

    useEffect(()=>{
        setTimeout(() => props.game(false),2000)
    },[props])

    return (
        <>
        <div style={color} className={`Choice_Button playing`}>
            <img src={image} alt=""/>
        </div>
        <div style={RPS[random].color} className={`Choice_Button host`}>
            <img src={RPS[random].image} alt="" />
        </div>
        </>
    );
}