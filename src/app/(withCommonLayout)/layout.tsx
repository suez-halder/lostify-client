import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <Box>{children}</Box>
        </div>
    );
};

export default CommonLayout;
