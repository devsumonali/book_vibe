'use client';

import ListedBookCard from '@/component/listedBooks/ListedBookCard';
import WishlistBookCard from '@/component/listedBooks/WishlistBookCard';
import { bookContext } from '@/context/BookContext';
import { useContext, useState } from 'react';

const ListedBooksPage = () => {
    const { readBooks, wishlists } = useContext(bookContext);
    const [activeTab, setActiveTab] = useState('read_book');

    const tabs = [
        { id: 'read_book', label: 'Read Books' },
        { id: 'wishlist_book', label: 'Wishlist Books' },
    ];

    return (
        <main className="mx-auto mt-3 mb-12 w-full max-w-7xl px-5 font-sans text-[#131313] md:w-5/6 md:px-0">
            <h1 className="rounded-2xl bg-[#f3f3f3] px-5 py-7 text-center text-2xl font-bold">
                Books
            </h1>

            <div className="mt-6 mb-10 flex justify-center sm:mb-12">
                <button
                    type="button"
                    className="inline-flex items-center gap-3 rounded-md bg-[#23be0a] px-5 py-3 text-sm font-semibold text-white"
                >
                    Sort By
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                    >
                        <path d="m5 9 7 7 7-7" />
                    </svg>
                </button>
            </div>

            <div className="flex w-full min-w-0 border-b border-[#d5d5d5] text-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        aria-pressed={activeTab === tab.id}
                        className={`-mb-px w-1/2 max-w-40 min-w-0 shrink-0 cursor-pointer rounded-t-lg border px-3 py-3 text-center whitespace-nowrap sm:px-5 ${
                            activeTab === tab.id
                                ? 'border-[#d5d5d5] border-b-white bg-white text-[#424242]'
                                : 'border-transparent text-[#898989]'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <section
                aria-label={activeTab === 'read_book' ? 'Read books' : 'Wishlist books'}
                className="mt-6 w-full min-w-0"
            >
                {activeTab === 'read_book' && (
                    <div className="w-full min-w-0 space-y-5">
                        {readBooks.length > 0 ? (
                            readBooks.map((book, index) => (
                                <ListedBookCard key={`${book.bookId}-${index}`} book={book} />
                            ))
                        ) : (
                            <p className="rounded-2xl border border-[#e2e2e2] px-5 py-12 text-center text-sm text-[#737373]">
                                No read books yet. Add a book using the Read Book button on its
                                details page.
                            </p>
                        )}
                    </div>
                )}

                {activeTab === 'wishlist_book' && (
                    <div className="w-full min-w-0 space-y-5">
                        {wishlists.length > 0 ? (
                            wishlists.map((wishlist, index) => (
                                <WishlistBookCard
                                    key={`${wishlist.bookId}-${index}`}
                                    wishlist={wishlist}
                                />
                            ))
                        ) : (
                            <p className="rounded-2xl border border-[#e2e2e2] px-5 py-12 text-center text-sm text-[#737373]">
                                No wishlist books yet. Add a book using the Wishlist button on its
                                details page.
                            </p>
                        )}
                    </div>
                )}
            </section>
        </main>
    );
};

export default ListedBooksPage;
