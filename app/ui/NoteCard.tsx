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
    total: string;
    handleDelete: (event?: React.MouseEvent<HTMLElement>) => void
}

const NoteCard = ({
    title,
    currencyName,
    type,
    notesCount,
    total,
    handleDelete
}: Types) => {
    const [openAlert, setOpenAlert] = useState<boolean>(false);

    const handleOpen = () => {
        setOpenAlert(true)
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
                            <Box component='span'>AMOUNT :</Box> {currencySymbol}{total} <CustomChip label={type} type={type} sx={{
                                marginLeft: '6px'
                            }} />
                        </Typography>
                        <Stack fontWeight={600}>
                            <Box component='span'>CURRENCY NOTES</Box>
                            <Box mt={1}>
                                <Stack sx={
                                    {
                                        width: '200px',
                                        border: '1px solid #ccc'
                                    }
                                } direction='row'>
                                    <Typography padding={1} borderRight="1px solid #ccc" width='100px'>
                                        NAME
                                    </Typography>
                                    <Typography padding={1} width='100px'>
                                        COUNT
                                    </Typography>
                                </Stack>
                                {
                                    Object.entries(notesCount)?.map(([key, value]) => {
                                        if (value > 0) {
                                            return (
                                                <Stack sx={
                                                    {
                                                        width: '200px',
                                                        border: '1px solid #ccc',
                                                        marginTop: '-1px'
                                                    }
                                                } direction='row'>
                                                    <Typography padding={1} borderRight="1px solid #ccc" width='100px'>
                                                        {currencySymbol}{key}
                                                    </Typography>
                                                    <Typography padding={1} width='100px'>
                                                        {value}
                                                    </Typography>
                                                </Stack>
                                            )
                                        }
                                    })
                                }
                            </Box>
                        </Stack>
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