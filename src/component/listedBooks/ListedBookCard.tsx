import type { IBooks } from '@/type/books';
import Image from 'next/image';
import Link from 'next/link';

const ListedBookCard = ({ book }: { book: IBooks }) => {
    return (
        <article className="flex w-full min-w-0 flex-col gap-5 rounded-2xl border border-[#e2e2e2] p-4 sm:flex-row sm:gap-6 sm:p-5">
            <div className="flex h-48 shrink-0 items-center justify-center rounded-2xl bg-[#f3f3f3] p-5 sm:h-44 sm:w-44 lg:h-48 lg:w-48">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={130}
                    height={160}
                    className="h-full w-auto max-w-full object-contain"
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-start [overflow-wrap:anywhere]">
                <h2 className="font-serif text-2xl leading-snug font-bold">{book.bookName}</h2>
                <p className="mt-2 text-sm text-[#424242]">By : {book.author}</p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="mr-1 font-semibold">Tag</span>
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-[#f3fbf3] px-3 py-1 font-medium text-[#23be0a]"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <span className="flex items-center gap-2 text-[#424242]">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 shrink-0"
                        >
                            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Year of Publishing: {book.yearOfPublishing}
                    </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#737373]">
                    <span className="flex items-center gap-2">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 shrink-0"
                        >
                            <circle cx="9" cy="7" r="3" />
                            <path d="M3 21v-3a6 6 0 0 1 12 0v3H3Zm13-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3h-3" />
                        </svg>
                        Publisher: {book.publisher}
                    </span>
                    <span className="flex items-center gap-2">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 shrink-0"
                        >
                            <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Zm0 0v5h5M9 13h6m-6 4h4" />
                        </svg>
                        Page {book.totalPages}
                    </span>
                </div>

                <div className="mt-3 flex w-full flex-wrap items-center gap-2 border-t border-[#e8e8e8] pt-3 text-sm sm:mt-auto sm:gap-3">
                    <span className="rounded-full bg-[#e0edff] px-4 py-2 text-[#328eff]">
                        Category: {book.category}
                    </span>
                    <span className="rounded-full bg-[#fff3e0] px-4 py-2 text-[#ffac33]">
                        Rating: {book.rating}
                    </span>
                    <Link
                        href={`/books/${book.bookId}`}
                        className="rounded-full bg-[#23be0a] px-4 py-2 font-medium text-white transition-colors hover:bg-[#1da008] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23be0a]"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ListedBookCard;
