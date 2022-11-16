export function CirclesFromButton(props:any){
    return(<div className={"Circles"} style={{position:"absolute",backgroundPositionX:props.x,backgroundPositionY:props.y}}>
        <div className="Circles1"></div>
        <div className="Circles2"></div>
        <div className="Circles3"></div>
    </div>);
}