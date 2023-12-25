import { Theme, Components } from "@mui/material/styles";

const MuiButton: Components<Theme>["MuiButton"] = {
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            color: theme.palette.common.white,
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
            cursor: "pointer",
        }),
    },
};

export default {
    MuiButton
};