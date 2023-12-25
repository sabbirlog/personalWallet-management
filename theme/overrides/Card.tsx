import { Theme, Components, alpha } from "@mui/material/styles";

const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      width: '500px',
      padding: '30px 16px',
      background:alpha(theme.palette.primary.main, 0.6),
      color: theme.palette.primary.contrastText,
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      boxShadow:
        "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
      cursor: "pointer",
    }),
  },
};

export default {
  MuiCard
};
