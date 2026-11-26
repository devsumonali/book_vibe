'use client';
import { bookContext } from '@/context/BookContext';
import { IBooks } from '@/type/books';
import { useContext } from 'react';

const WishlistButton = ({ book }: { book: IBooks }) => {
    const { wishlists, setWishLists } = useContext(bookContext);

    const handleWishlist = () => {
        setWishLists([...wishlists, book]);
    };
    return (
        <button
            type="button"
            onClick={handleWishlist}
            className="cursor-pointer rounded-md border border-[#45b3bf] bg-[#59c6d2] px-5 py-3 text-white hover:bg-[#45b3bf]"
        >
            Wishlist
        </button>
    );
};

export default WishlistButton;
