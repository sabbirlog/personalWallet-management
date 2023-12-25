import { Theme, Components } from '@mui/material/styles'

const MuiMenu: Components<Theme>['MuiMenu'] = {
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            '.MuiModal-backdrop': {
                backgroundColor: 'transparent',
                backdropFilter: 'blur(0px)'
            },
            '.MuiList-root': {
                padding: 0
            },
            '.MuiPaper-root': {
                backgroundImage: 'none',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                boxShadow: '0 0 0 1px hsla(0,0%,100%,.145), 0px 1px 1px rgba(0,0,0,.02),0px 8px 16px -4px rgba(0,0,0,.04),0px 24px 32px -8px rgba(0,0,0,.06)',
                top: '64px !important',
                marginTop: theme.palette.mode === 'dark' && '-1px',
                borderRadius: '0 0 4px 4px',
            },
            '.MuiMenuItem-root': {
                fontWeight: 400,
                lineHeight: '22px',
                ':hover': {
                    backgroundColor: 'rgb(162 155 155 / 10%)'
                }
            }
        })
    }
}

export default {
    MuiMenu
}