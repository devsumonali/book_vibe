import { getBooksDetails } from '@/lib/api/book';

interface singleBookPromise {
    params: Promise<{ id: number }>;
}

const BookDetailsPage = async ({ params }: singleBookPromise) => {
    const { id } = await params;

    const book = await getBooksDetails(id);
    return <div>{book.bookName}</div>;
};

export default BookDetailsPage;
