'use client';

import type { IBooks } from '@/type/books';
import { createContext, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

interface BookContextValue {
    readBooks: IBooks[];
    setReadBooks: Dispatch<SetStateAction<IBooks[]>>;
    wishlists: IBooks[];
    setWishLists: Dispatch<SetStateAction<IBooks[]>>;
}

export const bookContext = createContext<BookContextValue>({
    readBooks: [],
    setReadBooks: () => undefined,
    wishlists: [],
    setWishLists: () => undefined,
});

const BookContext = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBooks[]>([]);
    const [wishlists, setWishLists] = useState<IBooks[]>([]);

    const shareData = {
        readBooks,
        setReadBooks,
        wishlists,
        setWishLists,
    };
    return <bookContext.Provider value={shareData}>{children}</bookContext.Provider>;
};

export default BookContext;
