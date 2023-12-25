"use client";

import { createContext, SetStateAction, useMemo, useState } from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { createTheme, CssBaseline, PaletteMode } from "@mui/material";

import palette from "./palette/index";
import typography from "./typography";
import GlobalStyles from "@/styles/GlobalsStyles";
import componentOverrides from "./overrides/index";

const DEFAULT_PALETTE_MODE: PaletteMode = "light";

// Color mode context
export const ColorModeContext = createContext<{
  toggleColorMode: () => void;
}>({
  toggleColorMode: () => {},
});

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(DEFAULT_PALETTE_MODE);

  // Change color mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: SetStateAction<PaletteMode>) =>
          prevMode === "light" ? "dark" : "light"
        );
        localStorage.setItem("__mode__", mode);
      },
    }),
    []
  );

  // Control and create theme
  const theme: any = useMemo(
    () =>
      createTheme({
        palette: palette(mode),
        components: componentOverrides,
        typography,
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [mode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};

export default ThemeContextProvider;
