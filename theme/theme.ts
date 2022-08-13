import {createTheme} from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        secondary: {
            main: '#d32f2f'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 2560
        }
    },
})