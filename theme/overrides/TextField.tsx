import { Theme, Components, alpha } from '@mui/material/styles'

const MuiTextField: Components<Theme>['MuiTextField'] = {
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            width: '100%',
            '.MuiInputLabel-root': {
                color: alpha(theme.palette.common.black, 0.6),
            },
        })
    }
}

export default {
    MuiTextField
}