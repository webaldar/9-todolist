import {TasksStateType} from "../App";
import {v1} from "uuid";
import exp from "constants";

export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type){
        case '': {
            return state
        }
        case 'REMOVE-TASK': {
            debugger
            return {...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(
                    t => t.id !== action.payload.taskId),
            }
        }
        case "ADD-TASK": {
            const newTask = {
                id: v1(),
                title: action.payload.title,
                isDone: false
            }
            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
        }

        case 'CHANGE-TASK-STATUS': {
            const newState = {
                ...state,
                [action.payload.todolistId]:
                    state[action.payload.todolistId].map
                    (t => t.id == action.payload.taskId
                        ? {...t, isDone: action.payload.isDone}
                        : t)
            }
            return newState
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const someAC = (todolistId: string) => {
    return {type: '', payload: {}} as const
}
export const removeTaskAC = (payload: {taskId: string; todolistId : string}) => {
    return {type: 'REMOVE-TASK', payload} as const
}
export const addTaskAC = (payload: {todolistId: string, title: string}) => {
    return {type: "ADD-TASK", payload} as const
}

export const changeTaskStatusAC = (payload: {todolistId: string, taskId: string, isDone: boolean}) => {
    return {type: 'CHANGE-TASK-STATUS', payload} as const
}

export type SomeActionType = ReturnType<typeof someAC>
export type removeTaskType = ReturnType<typeof removeTaskAC>
export type addTaskType = ReturnType<typeof addTaskAC>
export type changeTaskStatusType = ReturnType<typeof changeTaskStatusAC>

type ActionType= SomeActionType | removeTaskType | addTaskType | changeTaskStatusType