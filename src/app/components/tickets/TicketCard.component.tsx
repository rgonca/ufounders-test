
//DESIGN
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Card, Row, Col, Button } from 'react-bootstrap';

const TicketCard = ({ ticket, getInfo }: any) => {
    const status = !ticket.present ? 'No ha entrado' : 'Ha entrado'
    const statusTicket = !ticket.present ? <ConfirmationNumberIcon style={{ transform: 'rotateZ(90deg)', fill: 'red', fontSize: '2.5rem' }} /> : <ConfirmationNumberIcon style={{ transform: 'rotateZ(90deg)', fill: 'green', fontSize: '2.5rem' }} />
    return (
            <Card style={{borderLeft: 'none', borderTop: "none", borderRight: "none"}}>
                <Card.Body>
                    <Row>
                        <Col>
                            <Row>
                                <Col className="d-flex align-items-center">
                                <div style={{ width: '15%'}}>
                                        {statusTicket}
                                    </div>
                                    <div>
                                    <h6 style={{ marginBottom: 5 }}>{ticket.firstName} {ticket.lastName}</h6>
                                    <span style={{ color: '#707070' }}>{status}</span>
                                    </div>
                                </Col>
                            <Col style={{ borderLeft: '1px solid #B1BBC5', borderRight: '1px solid #B1BBC5' }}>
                                    <Card.Text style={{marginBottom: 5}}>ID</Card.Text>
                                <span style={{ color: '#707070' }}>{ticket._id}</span>
                                </Col>
                                <Col>
                                <Card.Text style={{ marginBottom: 5 }}>Nº de ticket</Card.Text>
                                <span style={{ color: '#707070' }}>{ticket._id}</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} className="d-flex justify-content-end">
                        <Button variant="light" onClick={() => getInfo(ticket)}>
                                <MoreHorizIcon />
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    )
}

export default TicketCard