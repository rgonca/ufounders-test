import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
//COMPONENTS
import TicketCard from '../components/tickets/TicketCard.component'
import TicketModal from '../components/tickets/TicketModal.component'
//REDUX
import { getTicketsDataAction, getTicketInfoAction, clearTicketInfoAction } from '../redux/tickets/tickets.actions'
//DESIGN
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
const TicketsPage = ({ getTickets, getTicketInfo, ticketInfo, clearTicketInfo }: any) => {
    const [show, setShow] = useState(false)
    // useEffect(() => {
    //     getTickets()
    // }, [])
    const handleModal = () => show ? setShow(false) : setShow(true)
    const showTicketInfo = async (ticket: any) => {
        await getTicketInfo(ticket)
        handleModal()
    }
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
    console.log('ticket if', ticketInfo);
    
    return (
        <>
        <Container as='main' style={{maxWidth: "95%"}}>
            <Row>
                <Col>
                    <h1>CARANABO</h1><Button onClick={() => getTickets()}>llamar</Button>
                </Col>
            </Row>
            {tickets && tickets.map((ticket: any, idx: any) => <TicketCard key={idx} ticket={ticket} getInfo={showTicketInfo} />)}
            </Container>
            <Modal show={show} centered size="lg" onHide={handleModal}>
                <TicketModal ticket={ticketInfo}/>
            </Modal>
            </>
    )
}

const mapStateToProps = (state: any) => ({
    tickets: state.tickets.ticketsData ? state.tickets.ticketsData : [],
    ticketInfo: state.tickets.ticketInfo 
})
const mapDispatchToProps = (dispatch: any) => ({
    getTickets: () => dispatch(getTicketsDataAction()),
    getTicketInfo: (ticket: object) => dispatch(getTicketInfoAction(ticket)),
    clearTicketInfo: () => dispatch(clearTicketInfoAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage)