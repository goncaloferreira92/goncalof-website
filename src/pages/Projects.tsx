import React, { FunctionComponent } from 'react';
import CardComponent from '../cmp/CardComponent';

import {
    Card,
    Grid,
} from "@material-ui/core";
import { Typography } from '@material-ui/core';

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {

    let dummyCards = Array.from(Array(6).keys())

    let content = (idx: any) => {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: 350, height: 350}}>
                <Typography>This is the content nr {idx}</Typography>
            </div>
        )
    }

    return (
        <div id='work'>
            <h1 style={{ position: 'absolute' }}>WORK</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80vw',
                height: "100%",
                flexWrap: 'wrap',
                padding: '15px',
                backgroundColor: "pink",
            }}>
                <Grid container spacing={5} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 90,
                }}>
                    {
                        dummyCards.map(e => {
                            return (
                                <Grid item>
                                    <Card elevation={10} style={{ borderRadius: 20, backgroundColor: "#f2f2f2" }}>
                                        {content(e)}
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>


            </div>
        </div>
    )
}

export default Projects;