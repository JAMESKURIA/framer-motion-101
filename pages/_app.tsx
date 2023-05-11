import { Lato } from '@next/font/google'
import clsx from 'clsx'
import Navbar from 'components/Navbar'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'

const lato = Lato({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
})

function CustomApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to dev-animate!</title>
            </Head>
            <div
                className={clsx(
                    lato.className,
                    'py-24 px-12 lg:px-48 font-semibold'
                )}
            >
                <Navbar />
                <AnimatePresence key={router.pathname}>
                    <main>
                        <Component {...pageProps} />
                    </main>
                </AnimatePresence>
            </div>
        </>
    )
}

export default CustomApp
