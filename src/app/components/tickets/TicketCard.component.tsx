import React from 'react'

import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: { display: 'flex', justifyContent: "space-between", width: '100%', borderBottom: '1px solid grey' },
    mainInfo: { display: 'flex', justifyContent: "space-around", width: "75%" },
    ids: { paddingLeft: "24px", paddingRight: "24px", width: "33%" },
    status: { display: 'flex', alignItems: 'center', width: "33%", borderRadius: "15px", ticket: { width: '30%' } },
    ticket: { width: '30%'}

}));
const TicketCard = ({ ticket }: any) => {
    const classes = useStyles();
    const status = !ticket.present ? 'No ha entrado' : 'Ha entrado'
    const statusTicket = !ticket.present ? <ConfirmationNumberIcon style={{ transform: 'rotateZ(90deg)', fill: 'red' }} /> : <ConfirmationNumberIcon style={{ transform: 'rotateZ(90deg)', fill: 'green' }} />
    return (
        <div className={classes.card}>
            <div className={classes.mainInfo}>
                <div className={classes.status}>
                    <div className={classes.ticket}>
                        {statusTicket}
                    </div>
                    <div>
                        <p>{ticket.firstName} {ticket.lastName}</p>
                        <span>{status}</span>
                    </div>
                </div>
                <hr />
                <div className={classes.ids}>
                    <p>ID</p>
                    <p>{ticket._id}</p>
                </div>
                <hr />
                <div className={classes.ids}>
                    <p>Nº de ticket</p>
                    <p>{ticket._id}</p>
                </div>
            </div>
            <div >
                <Button style={{marginTop: '45%'}}>
                    <MoreHorizIcon />
                </Button>
            </div>
        </div>

    )
}

export default TicketCard