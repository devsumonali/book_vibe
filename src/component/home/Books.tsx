import { getBooksProps } from '@/lib/api/book';
import { IBooks } from '@/type/books';

const Books = async () => {
    const books: Promise<IBooks[]> = await getBooksProps();
    console.log(books);

    return (
        <div className="w-7xl mx-auto my-10 py-5">
            <h1 className="text-center font-bold text-[35px]">Book</h1>
        </div>
    );
};

export default Books;
