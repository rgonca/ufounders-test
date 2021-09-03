import { connect } from 'react-redux'
//COMPONENTS
import LoginForm from "../components/login/LoginForm.component"
//REDUX
import { getUserLoginAction } from '../redux/user/user.actions'
//DESIGN
import { Container, Row, Col } from 'react-bootstrap'
const TicketsPage = ({ getUserLogin }: any) => {

    return (
        <Container as="main" style={{ marginTop: '20%' }}>
            <Row>
                <Col />
                <Col sm={4}>
                    <h1>Bienvenido</h1>
                    <LoginForm />
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

// const mapStateToProps = (state: any) => ({
//     tickets: state.tickets.ticketsData ? state.tickets.ticketsData : [],
//     ticketInfo: state.tickets.ticketInfo
// })
const mapDispatchToProps = (dispatch: any) => ({
    getUserLogin: (username: string, password: string) => dispatch(getUserLoginAction(username, password)),

})
export default connect(null, mapDispatchToProps)(TicketsPage)