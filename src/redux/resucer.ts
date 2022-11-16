export interface Resucer{
    score:number,
}
const initialState:Resucer = {
    score: 0
}

export interface IncrementScore{
    type:"INCREMENT",
}
export interface DecrementScore{
    type:"DECREMENT",
}
export type Actions = IncrementScore | DecrementScore;

export default function scoreReducer(state:Resucer = initialState,action: Actions):Resucer{
    switch (action.type){
        case "DECREMENT": return {score:state.score-=1}
        case "INCREMENT": return {score:state.score+=1}
        default: return state;
    }
}
export const incScore = ():IncrementScore => ({
    type:"INCREMENT"
})
export const decScore = ():DecrementScore => ({
    type:"DECREMENT"
})

