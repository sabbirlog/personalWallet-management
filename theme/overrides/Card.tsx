import { Theme, Components, alpha } from "@mui/material/styles";

const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      background:
        theme.palette.mode === "dark"
          ? alpha(theme.palette.primary.light, 0.6)
          : theme.palette.primary.main,
    //   backgroundColor: `${alpha(theme.palette.grey[800], 0.6)} !important`,
      color: theme.palette.primary.contrastText,
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      boxShadow:
        "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
      cursor: "pointer",
      "& .card-media": {
        transition: "transform 0.3s ease-out",
      },
      ":hover": {
        "& .card-media": {
          transform: "scale(1.2)",
          transition: "transform 0.3s ease-out",
        },
      },
    }),
  },
};

const MuiCardActionArea: Components<Theme>["MuiCardActionArea"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiCardActions: Components<Theme>["MuiCardActions"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiCardContent: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiCardHeader: Components<Theme>["MuiCardHeader"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiCardMedia: Components<Theme>["MuiCardMedia"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default {
  MuiCard,
  MuiCardActionArea,
  MuiCardActions,
  MuiCardContent,
  MuiCardHeader,
  MuiCardMedia,
};
