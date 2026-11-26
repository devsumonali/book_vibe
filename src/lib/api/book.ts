import type { IBooks } from '@/type/books';
import { notFound } from 'next/navigation';

export const getBooksProps = async (): Promise<IBooks[]> => {
    const res = await fetch('http://localhost:3000/data.json');
    if (!res.ok) {
        console.log('api fetchin problem');
    }
    return res.json();
};

export const getBooksDetails = async (id: number): Promise<IBooks> => {
    const res = await fetch('http://localhost:3000/data.json');
    if (!res.ok) {
        throw new Error('api fetching problem');
    }

    const books: IBooks[] = await res.json();
    const book = books.find((book) => book.bookId === id);

    if (!book) {
        notFound();
    }

    return book;
};
