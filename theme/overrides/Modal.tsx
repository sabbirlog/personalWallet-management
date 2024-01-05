import { Theme, Components, alpha } from '@mui/material/styles'

const MuiModal: Components<Theme>['MuiModal'] = {
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            padding: '10px',
            ".MuiModal-backdrop": {
                backdropFilter: 'blur(1px)'
            },
        })
    }
}

export default {
    MuiModal
}