"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Stack } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar>
            <Container>
                <Stack
                    py={2}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Lostify
                    </Typography>
                    <Stack direction="row" spacing={4}>
                        <Typography variant="h6">Home</Typography>
                        <Typography variant="h6">Lost Items</Typography>
                        <Typography variant="h6">Found Items</Typography>
                    </Stack>

                    <Button>Post to Ad</Button>
                </Stack>
            </Container>
        </AppBar>
    );
};

export default Navbar;
