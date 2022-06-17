export const SET_USER_DATA = 'SET_USER_DATA'

export const setUser = (dados) => async (dispacth, getState) => {

    return dispacth({
        type: SET_USER_DATA,
        payload: dados
    }
    )
}
