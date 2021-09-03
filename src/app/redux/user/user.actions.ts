import UserActionTypes from './user.types'
import Swal from 'sweetalert2'

export const getUserLoginAction = (username: string, password: string) => async (dispatch: any) => {
    dispatch({ type: UserActionTypes.GET_USER_DATA_START })
    try {

        if (username === "rob" && password === "hola") {
            dispatch({
                type: UserActionTypes.GET_USER_DATA_SUCCESS,
                payload: { username: username, name: 'Roberto' }
            })
            Swal.fire({
                icon: 'success',
                text: "Bienvenido",
                timer: 1500
            })
        }
    } catch (error) {
        dispatch({
            type: UserActionTypes.GET_USER_DATA_FAIL,
            error: error
        })
    }

}

export const logoutAction = () => async (dispatch: any) => {
    dispatch({ type: UserActionTypes.LOGOUT_START })
    try {
        dispatch({ type: UserActionTypes.LOGOUT_SUCCESS })
        Swal.fire({
            icon: 'info',
            text: "Hasta pronto",
            timer: 1500
        })
    } catch (error) {
        dispatch({
            type: UserActionTypes.LOGOUT_FAIL,
            payload: error
        })
    }
}
