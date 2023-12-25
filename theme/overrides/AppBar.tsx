import { Theme, Components, alpha } from '@mui/material/styles'

const MuiAppBar: Components<Theme>['MuiAppBar'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            background: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, .8) : alpha(theme.palette.primary.main, .8),
            color: theme.palette.primary.contrastText,
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: 'inset 0 -1px 0 0 rgba(145, 158, 171, 0.2)',
            backdropFilter: 'saturate(180%) blur(5px)',
            "& svg": {
                color: theme.palette.primary.contrastText
            },
            "& .search-button": {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '32px',
                padding: '0 8px',
                fontSize: '14px',
                borderRadius: '6px',
                textTransform: 'capitalize',
                background: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.light
                    , .8) : theme.palette.grey['A100'],
                transitionProperty: 'background,color',
                transitionDuration: '.15s',
                transitionTimingFunction: 'ease',
                color: theme.palette.grey['A200'],
                minWidth: '200px',
                width: '100%',
                "&:hover": {
                    background: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.light
                        , .6) : theme.palette.grey['A100'],
                },
                "& > kbd": {
                    height: '20px',
                    lineHeight: '20px',
                    borderRadius: '6px',
                    padding: '0 6px',
                    fontSize: '12px',
                    fontWeight: '500',
                    fontFamily: 'inherit',
                    background: theme.palette.primary.main,
                    boxShadow: '0 0 0 1px rgba(0,0,0,.08)',
                    border: 'none',
                    marginLeft: '16px',
                }
            }
        })
    }
}

export default { MuiAppBar }