import ticketsActionTypes from './tickets.types';
import { getTicketsData } from '../../services/api';

export const getTicketsDataAction = () => async (dispatch:any) => {
    dispatch({ type: ticketsActionTypes.GET_TICKETS_DATA_START })
    try {
        const response = await getTicketsData()
        dispatch({
            type: ticketsActionTypes.GET_TICKETS_DATA_SUCCESS,
            payload: response
        })
    } catch (error) {
        console.log('tickets services error', error);
        dispatch({
            type: ticketsActionTypes.GET_TICKETS_DATA_FAIL,
            payload: error
        })
    }
}

export const getTicketInfoAction = (ticket: object) => (dispatch: any) => {
    dispatch({ type: ticketsActionTypes.GET_TICKET_INFO_START })
    try {
        dispatch({
            type: ticketsActionTypes.GET_TICKET_INFO_SUCCESS,
            payload: ticket
        })
    } catch (error) {
        console.log('tickets services error', error);
        dispatch({
            type: ticketsActionTypes.GET_TICKET_INFO_FAIL,
            payload: error
        })
    }
}

export const clearTicketInfoAction = () => (dispatch: any) => {
    dispatch({ type: ticketsActionTypes.CLEAR_TICKET_INFO })
}