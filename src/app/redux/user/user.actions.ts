// import { UserModel } from 'app/models/User.model'
import UserActionTypes from './user.types'
// // SERVICES
// import authApiService from '../../services/auth.api.service'
// import companyApiService from 'app/services/company.api.service'
// // import { getCompanyDetails } from '../company/company.actions'
// // import { getParameterByName } from '../../services/api'

// // **GET USER DATA**
// export const getUserDataRedux = () => async (dispatch: any) => {
//     dispatch({ type: UserActionTypes.GET_USER_DATA_START })
//     try {
//         const userData: any = await authApiService.getUserData()
//         // console.log("userData", userData)
//         if (userData) {
//             dispatch({
//                 type: UserActionTypes.GET_USER_DATA_SUCCESS,
//                 payload: userData
//             })
//             localStorage.setItem('id', userData.id);
//             localStorage.setItem('company_id', userData.company_id);
//             localStorage.setItem('driver_id', userData.driver_id);
//             localStorage.setItem('email', userData.email);
//             localStorage.setItem('auth_id', userData.id);
//             localStorage.setItem('role', userData.role)
//             localStorage.setItem('name', userData.name)
//             localStorage.setItem('surname', userData.surname)
//             localStorage.setItem('session_id', userData.session);
//             localStorage.setItem('user_id', userData.user_id);
//             localStorage.setItem('phone', userData.phone);
//             localStorage.setItem('token', userData.token);
//             localStorage.setItem('appinstance', userData.appinstance);
//             localStorage.setItem('permissions', JSON.stringify(userData.permissions));
//             // const session_id = getParameterByName('id');
//             // if (session_id) {
//             //     window.location.href = `${process.env.REACT_APP_BUSINESS}`;
//             // }
//         }
//     } catch (error) {
//         dispatch({
//             type: UserActionTypes.GET_USER_DATA_FAIL,
//             payload: error
//         })
//         window.location.href = 'https://admin.wagongoapp.com/'
//     }
// }


// export const getUserLogin = (username: string, password: string) => async (dispatch: any) => {
//     dispatch({ type: UserActionTypes.GET_USER_DATA_START })
//     try {
//         const response: any = await authApiService.login(username, password)
//         // console.log("response getUserLogin ", response)
//         await dispatch({
//             type: UserActionTypes.GET_USER_DATA_SUCCESS,
//             payload: response
//         })
//         localStorage.setItem('id', response.id);
//         localStorage.setItem('company_id', response.company_id);
//         localStorage.setItem('token', response.token)
//         // localStorage.setItem('driver_id', response.driver_id);
//         localStorage.setItem('email', response.email)
//         localStorage.setItem('auth_id', response.id)
//         localStorage.setItem('role', response.role)
//         localStorage.setItem('name', response.name)
//         localStorage.setItem('surname', response.surname)
//         // localStorage.setItem('session_id', response.session)
//         localStorage.setItem('user_id', response.user_id)
//         localStorage.setItem('phone', response.phone)

//         localStorage.setItem('appinstance', response.appinstance)
//         localStorage.setItem('permissions', JSON.stringify(response.permissions))

//         // GET COMPANY DETAILS
//         dispatch(getCompanyDetails(response.company_id))
//     } catch (error) {
//         dispatch({
//             type: UserActionTypes.GET_USER_DATA_FAIL,
//             error: error
//         })
//     }

// }

// export const getCompanyDetails = (company_id: string) => async (dispatch: any) => {
//     dispatch({ type: UserActionTypes.GET_COMPANYDETAILS_START })
//     const response = await companyApiService.getCompanyDetails(company_id)
//     try {
//         await dispatch({
//             type: UserActionTypes.GET_COMPANYDETAILS_SUCCESS,
//             payload: response
//         })

//     } catch (error) {
//         console.log("companyDetails error", error)
//         dispatch({
//             type: UserActionTypes.GET_COMPANYDETAILS_FAIL
//         })
//     }
// }

// // **LOGOUT**
// export const logout = () => async (dispatch: any) => {
//     dispatch({ type: UserActionTypes.LOGOUT_START })
//     try {
//         dispatch({ type: UserActionTypes.LOGOUT_SUCCESS })
//     } catch (error) {
//         dispatch({
//             type: UserActionTypes.LOGOUT_FAIL,
//             payload: error
//         })
//     }
// }
