import { Card, Box, Typography } from '@mui/material/index'

import { getSymbols } from '@utils/getSymbols';

interface Types {
    currencyName: string;
    walltetName: string;
    totalAmount: (val: string) => void
}

const BalanceViewCard = ({
    currencyName,
    walltetName,
    totalAmount
}: Types) => {

    const symbols = getSymbols(walltetName);
    const total: any = totalAmount(walltetName)

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
                    {walltetName} BALANCE
                </Typography>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Typography
                        variant="h3"
                    >
                        {symbols}
                    </Typography>
                    <Typography
                        variant="h3"
                    >
                        {total}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default BalanceViewCard