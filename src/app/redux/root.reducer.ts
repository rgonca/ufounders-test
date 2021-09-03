import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import ticketsReducer from "./tickets/tickets.reducer";
// import userReducer from "./user/user.reducer"
// import companyReducer from './company/company.reducer'
// import multipleServiceReducer from "./multipleService/multipleService.reducer"
// import agencyReducer from "./agency/agency.reducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'tickets',
    ]
}

const rootReducer = combineReducers({
    tickets: ticketsReducer
    // user: userReducer,
    // multipleService: multipleServiceReducer,
    // company: companyReducer,
    // agency: agencyReducer
})

export default persistReducer(persistConfig, rootReducer)