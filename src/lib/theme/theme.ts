"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4fc5bd",
        },
        secondary: {
            main: "#EF3C42",
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    backgroundColor: "#EF3C42",
                    padding: "8px 24px",
                    borderRadius: "100px",
                    color: "#fff",
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg",
            },
        },
    },
    typography: {
        body1: {
            color: "#778087",
        },
    },
});

export default theme;
