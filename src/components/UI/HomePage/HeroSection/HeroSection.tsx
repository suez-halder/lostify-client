import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: "100%",
                    height: "500px",
                    bgcolor: "primary.main",
                    opacity: "80%",
                    position: "absolute",
                }}
            />
            <Container>
                <Grid container spacing={2}>
                    {/* section-1 */}
                    <Grid
                        item
                        md={8}
                        sx={{
                            position: "relative",
                            top: "50px",
                        }}
                    >
                        {/* title and subtitle */}
                        <Box>
                            <Typography variant="h3" component="h2">
                                Find Your Lost Items Today!
                            </Typography>
                            <Typography component="p">
                                Quickly locate your misplaced belongings with
                                our efficient and user-friendly platform,
                                ensuring you reconnect with your lost items
                                today!
                            </Typography>
                        </Box>
                        {/* location and Search Bar */}
                        <Box></Box>
                    </Grid>

                    {/* section-2 */}
                    <Grid item md={4}></Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
