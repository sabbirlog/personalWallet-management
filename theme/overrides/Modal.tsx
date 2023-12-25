import { Theme, Components, alpha } from '@mui/material/styles'

const MuiModal: Components<Theme>['MuiModal'] = {
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            ".MuiModal-backdrop": {
                backgroundColor: alpha(theme.palette.primary.main, .8),
                backdropFilter: 'blur(2px)'
            },
            ".MuiBox-root": {
                backgroundColor: theme.palette.primary.main,
                border: 'none',
                borderRadius: '6px',
                padding: '16px',
                boxShadow: '0 0 0 1px hsla(0,0%,100%,.145), 0px 1px 1px rgba(0,0,0,.02),0px 8px 16px -4px rgba(0,0,0,.04),0px 24px 32px -8px rgba(0,0,0,.06)',
            }
        })
    }
}

export default {
    MuiModal
}