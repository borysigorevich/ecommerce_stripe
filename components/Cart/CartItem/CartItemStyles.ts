import {SxProps} from '@mui/material/styles'

export const CartItem: SxProps = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '15px',
    maxHeight: '120px'
}

export const Image: SxProps = {
    bgcolor: 'rgba(0,0,0, .2)',
    borderRadius: '16px'
}

export const Info: SxProps = {
    display: 'grid',
    gridTemplateRows: '20px 20px',
    alignContent: 'space-between',
    py: '10px'
}

export const Top: SxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#0c4b5e',
}

export const Bottom: SxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export const Calculations: SxProps = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
}