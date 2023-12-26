import { Card, Box, Typography } from "@mui/material/index"
import Stack from '@mui/material/stack'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Types {
    title: string;
    currencySymbol: string;
    amount: string;
    handleDelete: (event: React.MouseEvent<HTMLElement>) => void
}

const NoteCard = ({
    title,
    currencySymbol,
    amount,
    handleDelete
}: Types) => {
    return (
        <Card>
            <Stack sx={{
                alignItems: 'center',
                justifyContent: 'space-between'
            }} direction="row" spacing={2}>
                <Box>
                    <Typography variant="body1">
                        {title}
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
                <Box component="span" onClick={handleDelete}>
                    <DeleteForeverIcon color="danger" />
                </Box>
            </Stack>
        </Card>
    )
}

export default NoteCard