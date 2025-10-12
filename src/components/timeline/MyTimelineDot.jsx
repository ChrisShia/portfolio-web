import React from "react";
import TimelineDot from "@mui/lab/TimelineDot";

export default function CustomTimelineDot({ size = 18, customColor, color, sx }) {
    return (
        <TimelineDot
            color={color}
            sx={{
                width: size,
                height: size,
                backgroundColor: customColor || undefined,
                ...sx,
            }}
        />
    );
}