import Link from 'next/link';

function Navbar(){
    return (
        <nav className="navigation">
            <Link href="/">WGC</Link>
            <ul>
                <li>
                    <Link href=""></Link>
                </li>
                <li>
                    <Link href="">houses</Link>
                </li>
                <li>
                    <Link href="">services</Link>
                </li>
            </ul>            
        </nav>
    )
}