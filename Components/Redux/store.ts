import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {traingInstructions} from "./Reducers/traingReducer";


let allReduces = combineReducers({
    traingReducer: traingInstructions,
})

type AllReducersType = typeof allReduces
export type AppStateType = ReturnType<AllReducersType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export const store = createStore(allReduces, applyMiddleware(thunk));
