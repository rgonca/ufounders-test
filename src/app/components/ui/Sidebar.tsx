import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

const SideBar = ({ }: any) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
            >
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="text"
                >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Drawer>
        </div>
    );
}

export default SideBar