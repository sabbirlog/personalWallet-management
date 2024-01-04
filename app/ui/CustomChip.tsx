import * as React from "react";
import Chip from "@mui/material/Chip";

const checkType = (type: string) => {
    if (type === "Income") {
        return "success";
    } else {
        return "warning";
    }
};

const CustomChip = ({
    label,
    type,
    sx,
}: {
    label: string;
    type: string;
    sx?: any;
}) => {
    return <Chip sx={sx} label={label} color={checkType(type)} />;
};

export default CustomChip;
