import { Components } from "@mui/material/styles";

import MuiAppBar from "./AppBar";
import Card from "./Card";
import Chip from "./Chip";
import MuiMenu from "./Menu";
import MuiModal from "./Modal";
import TextField from "./TextField";

export default Object.assign(Card, MuiAppBar, MuiMenu, Chip, MuiModal, TextField
) as Components