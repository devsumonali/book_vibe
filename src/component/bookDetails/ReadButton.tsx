'use client';
import { bookContext } from '@/context/BookContext';
import { IBooks } from '@/type/books';
import { useContext } from 'react';

const ReadButton = ({ book }: { book: IBooks }) => {
    const { readBooks, setReadBooks } = useContext(bookContext);
    // const { readBooks, setReadBooks } = bookState;

    const handleSubmitRead = () => {
        setReadBooks([...readBooks, book]);
    };
    return (
        <button
            type="button"
            onClick={handleSubmitRead}
            className="cursor-pointer rounded-md border border-[#d5d5d5] px-5 py-3 hover:bg-[#f3f3f3]"
        >
            Read Book
        </button>
    );
};

export default ReadButton;
