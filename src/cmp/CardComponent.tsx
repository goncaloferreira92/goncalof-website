import React, { FunctionComponent } from "react";

import {
    Card,
} from "@material-ui/core";

interface CardProps {
    children: JSX.Element,
}

const CardComponent: FunctionComponent<CardProps> = ( children ) => {
    return (
        <Card elevation={10} className='card-component-container'>
            { children }
        </Card>
    )
}

export default CardComponent;