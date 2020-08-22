import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";


type ActionTraingType = InferActionsTypes<typeof actionsTraing>
type ThunkTraingType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTraingType>
export const actionsTraing = {
    addTraing: (data: any) => ({type: 'traingReducer/addTraing', data} as const)
}

export type TraingType = {
    id: number
    date: string
    totalApproach: number // Кол-во подходов
    totalExercise: number // Кол-во упражнений
    exercises: Array<ExerciseType>
}

type Approaches = {
    id: number
    weight: number
    repeat: number
}

type ExerciseType = {
    id: number
    name: string
    maxWeight: number
    minWeight: number
    totalApproach: number
    approach: Array<Approaches>
}

let initialStateTraing = {
    traings: [
        {
            id: 0,
            date: '22.08.2020',
            totalApproach: 11,
            totalExercise: 2,
            exercises: [
                {
                    id: 0,
                    name: 'Жим лежа',
                    maxWeight: 50,
                    minWeight: 30,
                    totalApproach: 6,
                    approach: [
                        {
                            id: 0,
                            weight: 30,
                            repeat: 20
                        },
                        {
                            id: 1,
                            weight: 40,
                            repeat: 15
                        },
                        {
                            id: 2,
                            weight: 40,
                            repeat: 15
                        },
                        {
                            id: 3,
                            weight: 50,
                            repeat: 6
                        },
                        {
                            id: 4,
                            weight: 50,
                            repeat: 11
                        },
                        {
                            id: 5,
                            weight: 50,
                            repeat: 6
                        }
                    ]
                },
                {
                    id: 1,
                    name: 'Жим хаммера (горизонтальный)',
                    minWeight: 40,
                    maxWeight: 40,
                    totalApproach: 5,
                    approach: [
                        {
                            id: 0,
                            weight: 40,
                            repeat: 20
                        },
                        {
                            id: 1,
                            weight: 40,
                            repeat: 12
                        },
                        {
                            id: 2,
                            weight: 40,
                            repeat: 13
                        },
                        {
                            id: 3,
                            weight: 40,
                            repeat: 15
                        },
                        {
                            id: 4,
                            weight: 40,
                            repeat: 13
                        }
                    ]
                }
            ]
        }
    ] as Array<TraingType>
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
