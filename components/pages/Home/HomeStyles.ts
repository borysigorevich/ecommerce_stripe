import {SxProps} from '@mui/material/styles'

export const Home: SxProps = {
    width: '100%',
    maxWidth: '1140px',
    mx: 'auto',
    px: '16px'
}


export const TitleBox: SxProps = {
    maxWidth: 'fit-content',
    margin: '0 auto 30px',
    textAlign: 'center',
    p: '30px 0 0',

    'h2': {
        fontSize: '40px',
        color: '#0c4b5e',
        mb: 1.5
    },
    '& p': {
        color: 'rgba(0, 0, 0, .4)'
    },

}

export const Products: SxProps = {
    // px: '30px',
    gap: '20px',
    mb: 4,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    placeItems: 'center'
}