import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Toaster} from 'react-hot-toast'

import {ThemeProvider} from '@mui/material/styles'
import {theme} from "@theme";
import {Layout} from "@components";
import {ContextProvider} from "@context";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <ThemeProvider theme={theme}>
            <ContextProvider>
                <Layout>
                    <Toaster/>
                    <Component {...pageProps} />
                </Layout>
            </ContextProvider>
        </ThemeProvider>
    </>
}

export default MyApp
