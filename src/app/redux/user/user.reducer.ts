import UserActionTypes from './user.types'

interface UserState {
    isAuthenticated: boolean,
    currentUser: any,
    loading: boolean,
    companyDetails: any[],
}

// **USER REDUCER**
const USER_INITIAL_STATE = {
    isAuthenticated: false,
    currentUser: null,
    loading: false,
    companyDetails: []
}

const userReducer = (state: UserState = USER_INITIAL_STATE, action: any) => {
    const { type, payload } = action
    switch (type) {
        /** START CASES **/
        case UserActionTypes.GET_USER_DATA_START:
        case UserActionTypes.GET_COMPANYDETAILS_START:
        case UserActionTypes.LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        /** LOGIN **/
        case UserActionTypes.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        /** COMPANY **/
        case UserActionTypes.GET_COMPANYDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                companyDetails: payload
            }
        case UserActionTypes.LOGOUT_SUCCESS:
            return USER_INITIAL_STATE
        /** FAIL CASES **/
        case UserActionTypes.GET_USER_DATA_FAIL:
        case UserActionTypes.GET_COMPANYDETAILS_FAIL:
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
