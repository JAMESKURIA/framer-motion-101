import { motion as m } from 'framer-motion'

export function Index() {
    return (
        <m.section
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 px-16 lg:px-48"
        >
            <div className="m-56 p-1 overflow-hidden">
                <m.h1
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="text-6xl text-center lg:text-right lg:text-9xl"
                >
                    Happy Pickler
                </m.h1>
            </div>
            <div className="flex justify-between">
                <div>
                    <h2>Design</h2>
                    <h2>Company</h2>
                    <h2>2022</h2>
                </div>
                <div>
                    <h3>This pickle gonna make you smile.</h3>
                    <h3>Scottish designs to make you happy.</h3>
                    <h3>Click contact for cool transition.</h3>
                </div>
            </div>
        </m.section>
    )
}

export default Index
