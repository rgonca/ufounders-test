
import { Modal, Row, Col, Button } from "react-bootstrap"
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const TicketModal = ({ ticket, closeModal }: any) => {
    const status = ticket && ticket.present ?  'Ha entrado' :'No ha entrado'
    const statusTicket = ticket && ticket.present ? <ConfirmationNumberIcon style={{ transform: 'rotateZ(90deg)', fill: 'green', fontSize: '2.5rem' }} /> : <ConfirmationNumberIcon style={{ transform: 'rotateZ(90deg)', fill: 'red', fontSize: '2.5rem' }} />
    return (<>
        <Modal.Header>
            <Col className="d-flex align-items-center">
                <div style={{ width: '10%' }}>
                    {statusTicket}
                </div>
                <div>
                    <h6 style={{ marginBottom: 5 }}>{ticket.firstName} {ticket.lastName}</h6>
                    <span style={{ color: '#707070' }}>{status}</span>
                </div>
            </Col>
            <Col sm={1}>
                <Button onClick={() => closeModal()} variant="light">
                    <HighlightOffIcon />
                </Button>
            </Col>
        </Modal.Header>
        <Modal.Body style={{ padding: 24 }}>
            <Row style={{ marginBottom: 24 }}>
                <Col>
                    <p style={{ marginBottom: 5 }}>ID</p>
                    <span style={{ color: '#707070' }}>{ticket._id}</span>
                </Col>
                <Col>
                    <p style={{ marginBottom: 5 }}>Nº de ticket</p>
                    <span style={{ color: '#707070' }}>{ticket._id}</span>
                </Col>
                <Col />
            </Row>
            <Row style={{ marginBottom: 24 }}>
                <Col>
                    <p style={{ marginBottom: 5 }}>Fecha de Nacimiento</p>
                    <span style={{ color: '#707070' }}>{ticket.birthdate}</span>
                </Col>
                <Col>
                    <p style={{ marginBottom: 5 }}>Email</p>
                    <span style={{ color: '#707070' }}>{ticket.email}</span>
                </Col>
                <Col>
                    <p style={{ marginBottom: 5 }}>Telefono</p>
                    <span style={{ color: '#707070' }}>{ticket.phone}</span>
                </Col>
            </Row>
            <Row >
                <Col>
                    <p style={{ marginBottom: 5 }}>Direccíon</p>
                    <span style={{ color: '#707070' }}>{ticket.address}</span>
                </Col>
            </Row>

        </Modal.Body>
    </>)
}

export default TicketModal