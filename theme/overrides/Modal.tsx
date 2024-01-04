import { Theme, Components, alpha } from '@mui/material/styles'

const MuiModal: Components<Theme>['MuiModal'] = {
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            padding: '10px',
            ".MuiModal-backdrop": {
                backgroundColor: alpha(theme.palette.primary.main, .8),
                backdropFilter: 'blur(2px)'
            },
        })
    }
}

export default {
    MuiModal
}