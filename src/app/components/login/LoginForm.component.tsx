import { useState } from "react";
import { connect } from 'react-redux'
import { useHistory } from "react-router";
//Redux
import { getUserLoginAction } from '../../redux/user/user.actions'

//Components
import { FormTextInput } from "../ui/input/Form.input";
import { Button } from "react-bootstrap";
const LoginForm = ({ getUserLogin }: any) => {
    
    const history = useHistory()
    const [login, setLogin] = useState({
        username: null,
        password: null
    })

    const handleInputChage = (e: any) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        })
    }
    const handleFormSubmit = () => {
        getUserLogin(login.username, login.password)
history.push('/tickets')
    }
    return (<form>
        <FormTextInput
            label="Nombre de usuario"
            id="username"
            name="username"
            value={login.username}
            onChange={handleInputChage}
        />
        <FormTextInput
            label="Contraseña"
            type="password"
            id="password"
            name="password"
            value={login.password}
            onChange={handleInputChage}
        />
        <Button onClick={ handleFormSubmit} variant="success">
            Enviar
        </Button>
    </form>)
}
const mapDispatchToProps = (dispatch: any) => ({
    getUserLogin: (username: string, password: string) => dispatch(getUserLoginAction(username, password)),

})
export default connect(null, mapDispatchToProps)(LoginForm)