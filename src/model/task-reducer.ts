import {TasksStateType} from "../App";

export const taskReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type){
        case '': {
            return state
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const someAC = (todolistId: string) => {
    return {type: '', payload: {}} as const
}


export type SomeActionType = ReturnType<typeof>

type ActionType= SomeActionType