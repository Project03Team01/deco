import React from "react";

import { frameStyle } from "./frameStyle.js";
import { Container, Grid } from "semantic-ui-react";


export function Frame() {
        const frame = frameStyle[0]

        const topLeft = {
            background: `url(${frame.imgCorner})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            minHeight: 160,
            margin: 0,
        }
    
        const frameTop = {
            background: `url(${frame.imgTop})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            width: "100%",
            minHeight: 160,
            margin: 0,
        }
    
        const topRight = {
            background: `url(${frame.imgCorner})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "rotateY(180deg)",
            width: "100%",
            minHeight: 160,
            margin: 0,
        }
    
        const frameLeft = {
            background: `url(${frame.imgSide})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center",
            width: "100%",
            minHeight: 160,
            margin: 0,
        }
    
        const frameRight = {
            background: `url(${frame.imgSide})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center",
            transform: "rotateX(180deg)",
            width: "100%",
            minHeight: 160,
            margin: 0,
        }
    
        const bottomLeft = {
            background: `url(${frame.imgCorner})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "rotateX(180deg)",
            width: "100%",
            minHeight: 160,
            margin: 0,
        }
    
        const frameBottom = {
            background: `url(${frame.imgTop})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            transform: "rotateX(180deg)",
            width: "100%",
            minHeight: 160,
            margin: 0,
        }
    
        const bottomRight = {
            background: `url(${frame.imgCorner})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "rotateX(180deg) rotateY(180deg)",
            width: "100%",
            minHeight: 160,
            margin: 0,
        }
    
        const artwork = {
            background: `url(${frame.artImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            width: "100%",
            minHeight: 600,
            margin: 0,
        }
    
        return (
            <Container>
                <style>
                    {`
                    .outerFrame {
                        -webkit-box-shadow: -9px 9px 18px -3px rgba(0,0,0,0.5);
                        -moz-box-shadow: -9px 9px 18px -3px rgba(0,0,0,0.5);
                        box-shadow: -9px 9px 18px -3px rgba(0,0,0,0.5);
                    }
                    `}
                </style>
                <Grid centered className="outerFrame">
                    <Grid.Row>
                        <Grid.Column style={topLeft} />
                        <Grid.Column style={frameTop} />
                        <Grid.Column style={topRight} />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={frameLeft} />
                        <Grid.Column style={artwork} />
                        <Grid.Column style={frameRight} />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={bottomLeft} />
                        <Grid.Column style={frameBottom} />
                        <Grid.Column style={bottomRight} />
                    </Grid.Row>
                </Grid>
            </Container>
        );
    
}