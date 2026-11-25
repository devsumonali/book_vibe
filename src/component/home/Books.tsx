import { getBooksProps } from '@/lib/api/book';
import { IBooks } from '@/type/books';
import BookCard from './BookCard';

const Books = async () => {
    const books: IBooks[] = await getBooksProps();

    return (
        <section className="mx-auto my-10 w-full max-w-7xl px-5 py-5 md:w-5/6 md:px-0">
            <h2 className="mb-8 text-center text-4xl font-bold">Books</h2>
            <BookCard books={books} />
        </section>
    );
};

export default Books;
