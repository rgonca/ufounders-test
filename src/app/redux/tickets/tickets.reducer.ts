import ticketsActionTypes from './tickets.types';

interface ticketsState {
    loading: boolean,
    error: null,
    ticketsData: any[],
    ticketInfo: any
}

const TICKETS_INITIAL_STATE = {
    loading: false,
    error: null,
    ticketsData: [],
    ticketInfo: null
}

const ticketsReducer = (state: ticketsState = TICKETS_INITIAL_STATE, action: any) => {
    const { type, payload } = action
    switch (type) {
        case ticketsActionTypes.GET_TICKETS_DATA_START:
        case ticketsActionTypes.GET_TICKET_INFO_START:
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
        case ticketsActionTypes.GET_TICKET_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                ticketInfo: payload
            }
        case ticketsActionTypes.GET_TICKETS_DATA_FAIL:
        case ticketsActionTypes.GET_TICKET_INFO_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case ticketsActionTypes.CLEAR_TICKET_INFO:
            return {
                ...state,
                ticketInfo: null
            }
        default:
            return state
    }
}

export default ticketsReducer