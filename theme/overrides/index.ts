import { Components } from "@mui/material/styles";

import Card from "./Card";
import Chip from "./Chip";
import Button from "./Button";
import Modal from "./Modal";
import TextField from "./TextField";
import Select from "./Select";

export default Object.assign(Card, Chip, Button, Modal, TextField, Select
) as Components