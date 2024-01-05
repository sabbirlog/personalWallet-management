import { Components, Theme, alpha } from '@mui/material/styles'

const MuiSelect: Components<Theme>['MuiSelect'] = {
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            color: alpha(theme.palette.common.black, 0.6),
            '.MuiSelect-icon': {
                color: theme.palette.common.black
            },
        })
    }
}

export default {
    MuiSelect
}