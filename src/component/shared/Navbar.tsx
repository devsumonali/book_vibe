'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();
    const home = pathName === '/';
    const listedBooks = pathName === '/listed-book';
    const pagesToRead = pathName === '/page-to-read';

    const activeClass = 'border-[#23be0a] text-[#23be0a]';
    const inactiveClass = 'border-transparent hover:text-[#23be0a]';

    return (
        <nav className="bg-white font-sans" aria-label="Main navigation">
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-9 md:w-5/6 md:flex-nowrap md:px-0">
                <Link href="/" className="whitespace-nowrap text-xl font-bold text-[#131313]">
                    Book Vibe
                </Link>
                <div className="order-last w-full md:order-0 md:w-auto">
                    <ul className="flex items-center justify-center gap-2 text-sm text-[#424242]">
                        <li>
                            <Link
                                href="/"
                                aria-current={home ? 'page' : undefined}
                                className={`block rounded-md border px-3 py-2 ${home ? activeClass : inactiveClass}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/listed-book"
                                aria-current={listedBooks ? 'page' : undefined}
                                className={`block rounded-md border px-3 py-2 ${listedBooks ? activeClass : inactiveClass}`}
                            >
                                Listed Books
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/page-to-read"
                                aria-current={pagesToRead ? 'page' : undefined}
                                className={`block rounded-md border px-3 py-2 ${pagesToRead ? activeClass : inactiveClass}`}
                            >
                                Pages to Read
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-3 whitespace-nowrap text-sm font-semibold text-white">
                    <button
                        type="button"
                        className="cursor-pointer rounded-md bg-[#23be0a] px-5 py-3 hover:bg-[#1da008]"
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        className="cursor-pointer rounded-md bg-[#59c6d2] px-5 py-3 hover:bg-[#45b3bf]"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
