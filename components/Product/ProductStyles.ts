import {SxProps} from '@mui/material/styles'

export const Product: SxProps = {
    width: '100%',
    maxWidth: '350px',
    // minWidth: '300px',
    position: 'relative',
    transition: '.3s',
    ':hover': {
        transform: 'scale(1.1)'
    }

}

export const ProductCard: SxProps = {
    '.product-name': {
        color: 'rgba(0, 0, 0, .5)',
        mb: .5
    },

    '.product-price': {
        color: '#000',
        fontWeight: '600'
    }
}

export const ImageBox: SxProps = {
    textAlign: 'center',
    bgcolor: 'rgba(0, 0, 0, .1)',
    borderRadius: '16px',
    mb: '4px'
}
