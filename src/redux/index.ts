import {combineReducers} from "redux";
import scoreReducer from "./ScoreReducer";
import {useSelector,TypedUseSelectorHook} from "react-redux";
import {GameStateReducer} from "./GameStateReducer";

export const rootReducer = combineReducers({score:scoreReducer,game:GameStateReducer})

export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;