import { Card, Box, Typography } from '@mui/material'

const BalanceViewCard = () => {
    return (
        <Card>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography
                    sx={{
                        marginBottom: '10px'
                    }}
                    variant="h3"
                >
                    My balance
                </Typography>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Typography
                        variant="h3"
                    >
                        $
                    </Typography>
                    <Typography
                        variant="h3"
                    >
                        198
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default BalanceViewCard