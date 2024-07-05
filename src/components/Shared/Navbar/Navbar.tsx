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
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
    return (
        <Container>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <Image src={logo} alt="logo" width="180" height="180" />
                </Box>
                <Stack direction="row" spacing={4}>
                    <Typography variant="h6">Home</Typography>
                    <Typography variant="h6">Lost Items</Typography>
                    <Typography variant="h6">Found Items</Typography>
                </Stack>

                <Button>Post Your Ad</Button>
            </Stack>
        </Container>
    );
};

export default Navbar;
