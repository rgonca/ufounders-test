import { connect } from 'react-redux';
//Redux
import { useHistory } from "react-router";
import { logoutAction } from "../../redux/user/user.actions";
//Design
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useLocation } from 'react-router';
//Icons
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RadioOutlinedIcon from '@material-ui/icons/RadioOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import DragIndicatorOutlinedIcon from '@material-ui/icons/DragIndicatorOutlined';
import LanguageIcon from '@material-ui/icons/Language';


const SideBar = ({ logout}: any) => {
    const location = useLocation()
    const history = useHistory()

    console.log(location);

    const routes = [
        {
            icon: <DragIndicatorOutlinedIcon />,
            link: '/tickets',
            disabled: false
        },
        {
            icon: <GradeOutlinedIcon />,
            link: '/grade',
            disabled: true
        }, {
            icon: <BarChartOutlinedIcon />,
            link: '/chart',
            disabled: true
        }, {
            icon: <FindInPageOutlinedIcon />,
            link: '/search',
            disabled: true
        }, {
            icon: <RadioOutlinedIcon />,
            link: '/radio',
            disabled: true
        }, {
            icon: <HelpOutlineIcon />,
            link: '/help',
            disabled: true
        }
    ]
    const closeSesion = async () => {
        await logout()
        history.push('/')
    }
    return (
        <div className="d-flex">
            <Drawer
                variant="permanent"
            >
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <IconButton onClick={() => closeSesion()} style={{ marginBottom: '150%' }}>
                    <LanguageIcon  style={{ fill: "red" }} />
                </IconButton>
                <ButtonGroup
                    size="large"
                    orientation="vertical"
                    // aria-label="vertical contained primary button group"
                    variant="text"
                >
                    {routes.map((route) => (
                        <Button href={route.link} style={{
                            borderBottom: 'none',
                            borderLeft: `${location.pathname === route.link ? "2px solid black" : "none"}`,
                            borderRadius: 5
                        }} disabled={route.disabled}>{route.icon}</Button>
                    ))}
                </ButtonGroup>
            </Drawer>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    logout: () => dispatch(logoutAction()),
})
export default connect(null, mapDispatchToProps)(SideBar)