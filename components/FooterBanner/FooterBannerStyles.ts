import {SxProps} from '@mui/material/styles'

export const FooterBanner: SxProps = {

}

export const Top: SxProps = {
    bgcolor: '#e33737',
    minHeight: '300px',
    borderRadius: '12px',
    position: 'relative',
    color: '#fff',
    p: '30px',
    mb: '35px',
    display: 'flex',

}

export const ImageBox: SxProps = {
    position: 'absolute',
    top: '-50px',
    left: 'calc(55% - 190px)',
    zIndex: '10',
    pointerEvents: 'none'
}

export const Left: SxProps = {
    alignSelf: 'flex-end',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',

    'div': {
        maxWidth: 'fit-content'
    },

    '.discount': {
        mb: .5,
        fontSize: '12px',
    },

    '.large1': {
        fontSize: '70px',
    },

    '.large2': {
        fontSize: '70px'
    },

    '.sale-time': {
        fontSize: '12px'
    }
}

export const Right: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,

    '.small-text': {
        fontSize: '14px'
    },
    '.mid-text': {
        fontSize: '55px'
    },
    '.desc': {
        fontSize: '12px',
        mb: 3
    }

}

export const Button: SxProps = {
    color: '#e33737',
    bgcolor: '#fff',
    borderRadius: '16px',
    p: '5px 15px',

    ':hover': {
        bgcolor: '#fff'
    }
}

export const Bottom: SxProps = {
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