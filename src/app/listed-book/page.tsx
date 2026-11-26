import BookCard from '@/component/home/BookCard';
import { getBooksProps } from '@/lib/api/book';

const ListedBooksPage = async () => {
    const books = await getBooksProps();

    return (
        <main className="mx-auto my-10 w-full max-w-7xl px-5 py-5 md:w-5/6 md:px-0">
            <h1 className="mb-8 text-center text-4xl font-bold">Listed Books</h1>
            <BookCard books={books} />
        </main>
    );
};

export default ListedBooksPage;
