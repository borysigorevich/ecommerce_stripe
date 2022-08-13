import {SxProps} from '@mui/material/styles'

export const Drawer: SxProps = {
    '.MuiPaper-root': {
        minWidth: '375px',
    }
}

export const Cart: SxProps = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh',
    p: '30px 15px'
}

export const Badge: SxProps = {
    fontSize: '20px',
}

export const Top: SxProps = {
    display: 'flex',
    gap: '8px',
    mb: 2,

    'h4': {
        fontWeight: '500'
    },

    '& p': {
        color: 'secondary.main'
    }
}

export const Mid: SxProps = {
    display: 'grid',
    gridTemplateRows: 'repeat(auto-fill, 120px)',
    gap: '20px'
}

export const Bottom: SxProps = {
    display: 'grid',
    gap: '25px',
}

export const Subtotal: SxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export const Pay: SxProps = {
    width: '60%',
    justifySelf: 'center'
}