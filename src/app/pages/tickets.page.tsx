import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
//COMPONENTS
import TicketCard from '../components/tickets/TicketCard.component'
//REDUX
import { getTicketsDataAction } from '../redux/tickets/tickets.actions'
//DESIGN
import { Button } from '@material-ui/core'
const TicketsPage = ({ getTickets }: any) => {
    // useEffect(() => {
    //     getTickets()
    // }, [])
    const tickets = [{
        "_id": "612f24359e1f0d6777dacd5b",
        "ticket": 0,
        "present": true,
        "firstName": "Sasha",
        "lastName": "Nixon",
        "birthdate": "2/6/1973",
        "email": "sashanixon@polarium.com",
        "phone": "(806) 468-2961",
        "address": "729 Gilmore Court, Cartwright, Delaware"
    },
        {
            "_id": "612f243597337896689388d0",
            "ticket": 1,
            "present": true,
            "firstName": "Rutledge",
            "lastName": "Richards",
            "birthdate": "5/3/1953",
            "email": "rutledgerichards@polarium.com",
            "phone": "(972) 531-2330",
            "address": "231 Aster Court, Coventry, Wyoming"
        },
        {
            "_id": "612f24357d4a21a380c9512d",
            "ticket": 2,
            "present": true,
            "firstName": "Wagner",
            "lastName": "Mcmahon",
            "birthdate": "18/3/1992",
            "email": "wagnermcmahon@polarium.com",
            "phone": "(825) 481-3409",
            "address": "730 Dekoven Court, Nutrioso, Virginia"
        },
        {
            "_id": "612f24359d21db34b465cba4",
            "ticket": 3,
            "present": true,
            "firstName": "Lancaster",
            "lastName": "Simpson",
            "birthdate": "1/1/1971",
            "email": "lancastersimpson@polarium.com",
            "phone": "(985) 450-2706",
            "address": "222 Roosevelt Place, Windsor, Maine"
        },
        {
            "_id": "612f2435791ebffaec188c68",
            "ticket": 4,
            "present": false,
            "firstName": "Shelton",
            "lastName": "Kelly",
            "birthdate": "12/5/1970",
            "email": "sheltonkelly@polarium.com",
            "phone": "(999) 430-2521",
            "address": "781 Catherine Street, Santel, Idaho"
        },]
    return (
        <>
        <div>
        <h1>CARANABO</h1><Button onClick={()=> getTickets()}>llamar</Button>
        </div>
        {tickets && tickets.map((ticket: any, idx: any) => <TicketCard key={idx} ticket={ticket} />)}
        </>
    )
}

const mapStateToProps = (state: any) => ({
    tickets: state.tickets.ticketsData ? state.tickets.ticketsData : []
})
const mapDispatchToProps = (dispatch: any) => ({
    getTickets: () => dispatch(getTicketsDataAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage)