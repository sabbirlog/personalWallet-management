import { Card, Box, Typography, Chip } from "@mui/material/index"
import Stack from '@mui/material/stack'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomChip from "./CustomChip";

interface Types {
    title: string;
    type: string;
    currencySymbol: string;
    currencyName: string;
    amount: string;
    handleDelete: (event: React.MouseEvent<HTMLElement>) => void
}

const NoteCard = ({
    title,
    currencySymbol,
    currencyName,
    type,
    amount,
    handleDelete
}: Types) => {
    return (
        <Card sx={{
            position: 'relative'
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
                        <Box component='span'>AMOUNT :</Box> {currencySymbol}{amount} <CustomChip label={type} type={type} />
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        <Box component='span'>CURRENCY DENOMINATIONS :</Box> {currencySymbol}1 : 10 - {currencySymbol}5 : 10 - {currencySymbol}10 : 10 - {currencySymbol}20 : 10
                    </Typography>
                </Box>
                <Box component="span" onClick={handleDelete}>
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
    )
}

export default NoteCard