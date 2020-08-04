import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";


type ActionTraingType = InferActionsTypes<typeof actionsTraing>
type ThunkProfileType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTraingType>
export const actionsTraing = {
    addTraing: (data: any) => ({type: 'traingReducer/addTraing', data} as const)
}

let initialStateTraing = {
    traings: [] as any
}

type initialStateTraingType = typeof initialStateTraing

export const traingInstructions = (state = initialStateTraing, action: ActionTraingType): initialStateTraingType => {
    switch (action.type) {
        case "traingReducer/addTraing":
            return {...state, traings: [...state.traings, action.data]}
        default:
            return state
    }
}
