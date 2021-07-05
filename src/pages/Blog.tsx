import React, { FunctionComponent } from "react";

import {
    Typography,
} from "@material-ui/core";

interface BlogProps {};

const Blog: FunctionComponent<BlogProps> = (): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'pink',
            width: '100vw',
            height: '100vh'
        }} 
            id='blog'
        >
            <Typography variant="h4">About</Typography>
        </div>
    )
}

export default Blog;