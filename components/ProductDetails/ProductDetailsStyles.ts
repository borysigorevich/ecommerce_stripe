import {SxProps} from '@mui/material/styles'

const marquee: SxProps = {
    from: {
        transform: 'translateX(50%)',
    },
    to: {
        transform: 'translateX(-50%)',
    }
}

export const ProductDetails: SxProps = {
    px: '30px',
    width: '100%',
    maxWidth: '1140px',
    mx: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '30px',
    justifyItems: 'center'
}

export const ImagesBox: SxProps = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',

    '.big-image': {
        bgcolor: 'rgba(0, 0, 0, .1)',
        borderRadius: '16px',
        px: 2
    },
    '.small-image-box': {
        display: 'grid',
        placeItems: 'center',
        gap: '15px',
        gridTemplateColumns: 'repeat(auto-fill, 55px)'
    },
}

export const SmallImg: (active: boolean) => SxProps = (active) => {
    return {
        bgcolor: active ? 'red' : 'rgba(0, 0, 0, .1)',
        borderRadius: '16px',
        px: 1,
        cursor: 'pointer',
        transition: '.3s',

        ':hover': {
            bgcolor: 'red'
        }
    }
}

export const Info: SxProps = {
    justifySelf: 'start',
    width: '200px',
    '.name': {
        color: '#0c4b5e',
        fontSize: '25px',
        mb: 1.5
    }
}

export const Rating: SxProps = {
    display: 'flex',
    gap: '4px',
    alignItems: 'flex-end',

    '.rating': {
        color: '#d32f2f'
    },

    '& p': {
        fontSize: '14px'
    }
}

export const Details: SxProps = {
    '.label': {
        color: '#0c4b5e',
    },

    '.details, .price': {
        fontSize: '12px',
        color: 'rgba(0, 0, 0, .6)'
    }
}

export const Quantity: SxProps = {
    mb: 2,

    '.label': {
        color: '#0c4b5e',
        mb: 1
    },

    '.rectangle': {
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        placeItems: 'center',
        position: 'relative',
        minHeight: '28px',
        gap: '8px'
    },
}

export const Buttons: SxProps = {
    display: 'grid',
    gap: '8px'
}

export const MarqueeBox: SxProps = {
    overflowX: 'hidden',
    py: '20px',
    width: '100%',
    position: 'relative',
    minHeight: '350px',
}

export const Marquee: SxProps = {
    '@keyframes marquee': marquee,
    position: 'absolute',
    animation: 'marquee 15s infinite alternate',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 250px)',
    gap: '30px',
    ':hover': {
        animationPlayState: 'paused'
    }
}