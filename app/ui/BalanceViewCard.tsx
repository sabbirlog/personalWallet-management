import { Card, Box, Typography } from '@mui/material/index'

interface Types {
    currencySymbol: string;
    totalAmount: number;
}

const BalanceViewCard = ({
    currencySymbol,
    totalAmount
}: Types) => {
    return (
        <Card sx={{
            marginTop: '20px'
        }}>
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
                    Current Balance
                </Typography>
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
                        {totalAmount}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default BalanceViewCard