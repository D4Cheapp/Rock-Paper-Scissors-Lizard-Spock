import {combineReducers} from "redux";
import scoreReducer from "./resucer";
import {useSelector,TypedUseSelectorHook} from "react-redux";

export const rootReducer = combineReducers({score:scoreReducer})

export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;