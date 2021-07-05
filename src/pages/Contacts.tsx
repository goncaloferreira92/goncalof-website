import React, { FunctionComponent } from "react";

import {
    Typography,
} from "@material-ui/core";

interface ContactProps {};

const Contact: FunctionComponent<ContactProps> = (): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'brown',
            width: '100vw',
            height: '100vh'
        }} 
            id='about'
        >
            <Typography variant="h4">Contact</Typography>
        </div>
    )
}

export default Contact;