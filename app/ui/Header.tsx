import React from 'react'

import { Box, Typography } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Header = () => {
    return (
        <Box>
            <AccountBalanceWalletIcon color='info' fontSize='large' />
            <Typography component='h1' variant="h1">
                Personal Wallet
            </Typography>
        </Box>
    )
}

export default Header