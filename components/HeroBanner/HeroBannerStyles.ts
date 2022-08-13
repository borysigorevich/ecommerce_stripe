import {SxProps} from '@mui/material/styles'

export const HeaderBanner: SxProps = {
    position: 'relative',
    p: '50px 30px',
    minHeight: '250px',
    bgcolor: 'rgba(0, 0, 0, .2)',
    textTransform: 'uppercase',
    borderRadius: '16px',

    'h3': {
        fontSize: '40px'
    },
    'h1': {
        color: '#fff',
        fontSize: '100px'
    },



}

export const ImageBox: SxProps = {
    position: 'absolute',
    top: 'calc(50% - 175px)',
    left: 'calc(50% - 175px)'
}

export const Button: SxProps = {
    p: '5px 15px',
    bgcolor: 'red',
    borderRadius: '10px',
    color: '#fff',
    textTransform: 'upppercase',

    ':hover': {
        bgcolor: 'red'
    }
}

export const Description: SxProps = {
    textAlign: 'end',

    'h5': {
        color: '#0c4b5e',
        mb: 2
    },

    '& p': {
        color: 'rgba(0, 0, 0, .2)',
        fontSize: '12px'
    }
}