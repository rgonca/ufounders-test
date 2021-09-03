import ticketsActionTypes from './tickets.types';

interface ticketsState {
    loading: boolean,
    error: null,
    ticketsData: any[]
}

const TICKETS_INITIAL_STATE = {
    loading: false,
    error: null,
    ticketsData: []
}

const ticketsReducer = (state: ticketsState = TICKETS_INITIAL_STATE, action: any) => {
    const { type, payload } = action
    switch (type) {
        case ticketsActionTypes.GET_TICKETS_DATA_START:
            return {
                ...state,
                loading: true
            }
        case ticketsActionTypes.GET_TICKETS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                ticketsData: payload
            }
        case ticketsActionTypes.GET_TICKETS_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default ticketsReducer