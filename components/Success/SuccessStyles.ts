import {SxProps} from '@mui/material/styles'

export const SuccessWrapper: SxProps = {
    display: 'flex',
    justifyContent: 'center',
}

export const Success: SxProps = {
    mt: '100px',
    bgcolor: 'rgba(0, 0, 0, .2)',
    width: '30%',
    height: '40%',
    display: 'grid',
    gridTemplateRows: 'repeat(auto-fill, max-content) ',
    placeContent: 'center',
    placeItems: 'center',
    gap: '10px',
    borderRadius: '16px'
}