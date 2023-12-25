import { Theme, Components } from '@mui/material/styles'

const MuiChip: Components<Theme>['MuiChip'] = {
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            borderRadius: '5px',
            color: theme.palette.common.white,
            fontSize: '10px',
            padding: '5px 8px',
            height: 'auto',
            textTransform: 'uppercase',
            '& span': {
                padding: '0'
            }
        })
    }
}

export default { MuiChip }