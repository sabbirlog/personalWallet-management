import { Card, Box, Typography } from '@mui/material/index'

import { getSymbols } from '@utils/getSymbols';

interface Types {
    currencyName: string;
    totalAmount: (val: string) => void
}

const BalanceViewCard = ({
    currencyName,
    totalAmount
}: Types) => {

    const symbols = getSymbols(currencyName);
    const total: any = totalAmount(currencyName);

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
                    component="h4"
                    variant="h4"
                    fontWeight={700}
                >
                    {currencyName} BALANCE
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