import type { IBooks } from '@/type/books';
import Image from 'next/image';
import Link from 'next/link';

interface getBookProps {
    books: IBooks[];
}

const BookCard = ({ books }: getBookProps) => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => {
                return (
                    <Link
                        href={`/listed-book/${book.bookId}`}
                        key={book.bookId}
                        className="flex flex-col rounded-2xl border border-[#e2e2e2] bg-white p-5 font-sans text-[#131313]"
                    >
                        <div className="flex h-50 items-center justify-center rounded-2xl bg-[#f3f3f3] p-6">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                width={140}
                                height={160}
                                className="h-36 w-auto max-w-full object-contain"
                            />
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {book.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-[#f3fbf3] px-4 py-1 text-sm font-medium text-[#23be0a]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="mt-4 font-serif text-2xl leading-snug font-bold">
                            {book.bookName}
                        </h3>
                        <p className="mt-3 mb-4 text-sm">By : {book.author}</p>
                        <div className="mt-auto flex items-center justify-between border-t border-dashed border-[#dedede] pt-4 text-sm">
                            <span>{book.category}</span>
                            <div className="flex items-center gap-2">
                                <span>{book.rating.toFixed(2)}</span>
                                <span aria-hidden="true" className="text-2xl leading-none">
                                    ☆
                                </span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default BookCard;
