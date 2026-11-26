import ReadButton from '@/component/bookDetails/ReadButton';
import { getBooksDetails } from '@/lib/api/book';
import Image from 'next/image';

interface singleBookPromise {
    params: Promise<{ id: string }>;
}

const BookDetailsPage = async ({ params }: singleBookPromise) => {
    const { id } = await params;

    const book = await getBooksDetails(Number(id));

    return (
        <main className="mx-auto mb-12 grid w-full max-w-7xl grid-cols-1 gap-8 px-5 font-sans text-[#131313] md:w-5/6 md:grid-cols-2 md:px-0">
            <div className="flex items-center justify-center rounded-xl bg-[#f3f3f3] px-8 py-12 md:min-h-125">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={320}
                    height={400}
                    className="h-80 w-auto max-w-full object-contain md:h-96"
                    loading="eager"
                />
            </div>

            <div className="min-w-0">
                <h1 className="font-serif text-3xl leading-tight font-bold lg:text-4xl">
                    {book.bookName}
                </h1>
                <p className="mt-3 text-sm font-medium">By : {book.author}</p>

                <p className="mt-5 border-y border-[#e2e2e2] py-3 text-sm">{book.category}</p>

                <p className="mt-5 text-sm leading-7 text-[#646464]">
                    <span className="font-bold text-[#131313]">Review : </span>
                    {book.review}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 border-b border-[#e2e2e2] pb-5 text-sm">
                    <span className="font-bold">Tag</span>
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-[#f3fbf3] px-4 py-1 font-medium text-[#23be0a]"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <dl className="mt-5 grid grid-cols-[max-content_1fr] gap-x-8 gap-y-3 text-sm">
                    <dt className="text-[#646464]">Number of Pages:</dt>
                    <dd className="font-semibold">{book.totalPages}</dd>

                    <dt className="text-[#646464]">Publisher:</dt>
                    <dd className="font-semibold">{book.publisher}</dd>

                    <dt className="text-[#646464]">Year of Publishing:</dt>
                    <dd className="font-semibold">{book.yearOfPublishing}</dd>

                    <dt className="text-[#646464]">Rating:</dt>
                    <dd className="font-semibold">{book.rating}</dd>
                </dl>

                <div className="mt-6 flex gap-3 text-sm font-semibold">
                    <ReadButton />
                    <button
                        type="button"
                        className="cursor-pointer rounded-md border border-[#45b3bf] bg-[#59c6d2] px-5 py-3 text-white hover:bg-[#45b3bf]"
                    >
                        Wishlist
                    </button>
                </div>
            </div>
        </main>
    );
};

export default BookDetailsPage;
