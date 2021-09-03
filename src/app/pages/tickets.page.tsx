import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
//REDUX
import { getTicketsDataAction } from '../redux/tickets/tickets.actions'
const TicketsPage = ({ getTickets }: any) => {
    useEffect(() => {
        getTickets()
    }, [])
    return (<h1>CARANABO</h1>)
}

const mapStateToProps = (state: any) => ({
    // agencies: state.agency.agencies ? state.agency.agencies : []
})
const mapDispatchToProps = (dispatch: any) => ({
    getTickets: () => dispatch(getTicketsDataAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage)