import { PaletteMode } from "@mui/material";

import { dark } from "./dark";
import { light } from "./light";

export default (mode: PaletteMode) => {
    return {
        mode,
        ...(mode === 'light' ? light : dark)
    }
}