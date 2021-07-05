import React, { FunctionComponent } from "react";

import {
    Typography,
} from "@material-ui/core";

interface AboutProps {};

const About: FunctionComponent<AboutProps> = (): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'blue',
            width: '100vw',
            height: '100vh'
        }} 
            id='about'
        >
            <Typography variant="h4">About</Typography>
        </div>
    )
}

export default About;