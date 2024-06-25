type InitState = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitState = initState, action: ChangeThemeIdAC): InitState => { // fix any      - ok
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}


type ChangeThemeIdAC = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any     - ok
