import { useState } from "react";
import { Card, Box, Typography, Stack } from "@mui/material/index"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import CustomChip from "./CustomChip";
import AlertDialog from "./AlertDialog";
import { getSymbols } from "@utils/getSymbols";

interface Types {
    title: string;
    type: string;
    currencyName: string;
    notesCount: {
        '1': number,
        '5': number,
        '10': number,
        '20': number
    };
    handleDelete: (event?: React.MouseEvent<HTMLElement>) => void
}

const NoteCard = ({
    title,
    currencyName,
    type,
    notesCount,
    handleDelete
}: Types) => {
    const [openAlert, setOpenAlert] = useState<boolean>(false);

    const handleOpen = () => {
        setOpenAlert(true)
    }

    const calculateTotal = () => {
        return Object.entries(notesCount)?.reduce((total, [key, value]) => {
            if (value > 0) {
                const totalAmount = total + parseInt(key) * value
                return totalAmount;
            }
            return total
        }, 0)
    }

    const currencySymbol = getSymbols(currencyName)

    return (
        <>
            <Card sx={{
                position: 'relative',
                cursor: 'default'
            }}>
                <Stack sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }} direction="row" spacing={2}>
                    <Box>
                        <Typography variant="body1" mb={2}>
                            <Box component='span'>NOTE :</Box> {title}
                        </Typography>
                        <Typography
                            variant="body1"
                            mb={2}
                        >
                            <Box component='span'>AMOUNT :</Box> {currencySymbol}{calculateTotal()} <CustomChip label={type} type={type} sx={{
                                marginLeft: '6px'
                            }} />
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            <Box component='span'>CURRENCY DENOMINATIONS :</Box> {currencySymbol}1 : {notesCount[1]} - {currencySymbol}5 : {notesCount[5]} - {currencySymbol}10 : {notesCount[10]} - {currencySymbol}20 : {notesCount[20]}
                        </Typography>
                    </Box>
                    <Box sx={{
                        cursor: 'pointer'
                    }} component="span" onClick={handleOpen}>
                        <DeleteForeverIcon color="warning" />
                    </Box>
                </Stack>
                <Box sx={
                    {
                        position: 'absolute',
                        right: '8px',
                        top: '8px',
                        padding: '4px 10px',
                        borderRadius: '4px'
                    }
                } component='span' color='secondary.light' bgcolor='info.light' fontWeight={400}>{currencyName}</Box>
            </Card>
            <AlertDialog open={openAlert} setOpen={setOpenAlert} handleDelete={handleDelete} />
        </>
    )
}

export default NoteCard