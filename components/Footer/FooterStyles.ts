import {SxProps} from '@mui/material/styles'

export const Footer: SxProps = {
    textAlign: 'center',
    mb: '30px',
    '& p': {
        fontWeight: '500',
        color: '#0c4b5e',
        mb: 1,
    },

    '& div': {
        fontSize: '22px',
        color: '#0c4b5e',
        display: 'flex',
        justifyContent: 'center',
        gap: '12px'
    }
}