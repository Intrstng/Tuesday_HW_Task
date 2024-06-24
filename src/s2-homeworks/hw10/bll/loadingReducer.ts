export type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false,
}

export const loadingReducer = (state: initStateType = initState, action: LoadingActionType): initStateType => { // fix any  - ok
    switch (action.type) {
        // пишет студент  // need to fix        - ok
        case 'CHANGE_LOADING': {
                return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
