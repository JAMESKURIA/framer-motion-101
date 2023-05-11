import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="text-2xl font-medium z-20 relative">
            <ul className="flex gap-12">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
