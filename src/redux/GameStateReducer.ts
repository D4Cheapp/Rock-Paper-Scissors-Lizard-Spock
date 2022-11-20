export interface GameStateReducerInterface{
    state:boolean
}
export interface Action{
    type:"TOGGLE"
}

export const toggleGame = ():Action =>({
    type:"TOGGLE"
})

export function GameStateReducer(state:GameStateReducerInterface = {state:false},action:Action){
    if (action.type === "TOGGLE"){
        return {state:!state.state}
    }
    return state
}