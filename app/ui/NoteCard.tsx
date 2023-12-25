import { Card, Box, Typography } from "@mui/material/index"
import Stack from '@mui/material/stack'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Types {
    title: string;
    date: string;
    currencySymbol: string;
    amount: string;
}

const NoteCard = ({
    title,
    date,
    currencySymbol,
    amount
}: Types) => {
    return (
        <Card>
            <Stack sx={{
                alignItems: 'center'
            }} direction="row" spacing={2}>
                <Box>
                    <Typography variant="body1">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {date}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Typography
                        variant="h3"
                    >
                        {currencySymbol}
                    </Typography>
                    <Typography
                        variant="h3"
                    >
                        {amount}
                    </Typography>
                </Box>
                <Box component="span">
                    <DeleteForeverIcon color="danger" />
                </Box>
            </Stack>
        </Card>
    )
}

export default NoteCard