export interface ScoreReducer {
    score:number,
}
const initialState:ScoreReducer = {
    score: 0
}
export interface IncrementScore{
    type:"INCREMENT",
}
export interface DecrementScore{
    type:"DECREMENT",
}
export type Actions = IncrementScore | DecrementScore;

export default function scoreReducer(state:ScoreReducer = initialState, action: Actions):ScoreReducer{
    switch (action.type){
        case "DECREMENT":
            if(state.score > 0)
                return {score:state.score-1};
            return state;
        case "INCREMENT": return {score:state.score+1};
        default: return state;
    }
}
export const incScore = ():IncrementScore => ({
    type:"INCREMENT"
})
export const decScore = ():DecrementScore => ({
    type:"DECREMENT"
})

