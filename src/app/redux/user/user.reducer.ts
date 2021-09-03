import UserActionTypes from './user.types'

interface UserState {
    isAuthenticated: boolean,
    currentUser: any,
    loading: boolean,
}

// **USER REDUCER**
const USER_INITIAL_STATE = {
    isAuthenticated: false,
    currentUser: null,
    loading: false,
}

const userReducer = (state: UserState = USER_INITIAL_STATE, action: any) => {
    const { type, payload } = action
    switch (type) {
        /** START CASES **/
        case UserActionTypes.GET_USER_DATA_START:
        case UserActionTypes.LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        /** LOGIN **/
        case UserActionTypes.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: payload,
                loading: false
            }
        case UserActionTypes.LOGOUT_SUCCESS:
            return USER_INITIAL_STATE
        /** FAIL CASES **/
        case UserActionTypes.GET_USER_DATA_FAIL:
        case UserActionTypes.LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default userReducer
