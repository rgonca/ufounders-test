import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
//COMPONENTS
import TicketCard from '../components/tickets/TicketCard.component'
import TicketModal from '../components/tickets/TicketModal.component'
//REDUX
import { getTicketsDataAction, getTicketInfoAction, clearTicketInfoAction } from '../redux/tickets/tickets.actions'
//DESIGN
import { Modal, Container, Row, Col } from 'react-bootstrap'
const TicketsPage = ({ getTickets, getTicketInfo, ticketInfo, clearTicketInfo, user, tickets }: any) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        getTickets()
    })
    const handleModal = () => show ? setShow(false) : setShow(true)
    const showTicketInfo = async (ticket: any) => {
        await getTicketInfo(ticket)
        handleModal()
    }
    const closeModal = async() => {
        await handleModal()
        // clearTicketInfo()
    }
    const name = user && user.name ? user.name : ''
    return (
        <>
            <Container as='main' style={{ maxWidth: "95%" }}>
                <Row>
                    <Col>
                        <h1>Bienvenido de nuevo, {name}</h1>
                        <p style={{ color: '#707070' }}>Estas son las personas que han comprado entrada</p>
                    </Col>
                </Row>
                {tickets && tickets.map((ticket: any, idx: any) => <TicketCard key={idx} ticket={ticket} getInfo={showTicketInfo} />)}
            </Container>
            <Modal show={show} centered size="lg" onHide={closeModal}>
                <TicketModal ticket={ticketInfo} closeModal={closeModal}/>
            </Modal>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    tickets: state.tickets.ticketsData ? state.tickets.ticketsData : [],
    ticketInfo: state.tickets.ticketInfo,
    user: state.user.currentUser
})
const mapDispatchToProps = (dispatch: any) => ({
    getTickets: () => dispatch(getTicketsDataAction()),
    getTicketInfo: (ticket: object) => dispatch(getTicketInfoAction(ticket)),
    clearTicketInfo: () => dispatch(clearTicketInfoAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage)