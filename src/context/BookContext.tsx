'use client';

import { createContext, ReactNode, useState } from 'react';

const bookContext = createContext({});

const BookContext = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlist, setWishList] = useState([]);

    const shareData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishList,
    };
    return <bookContext.Provider value={shareData}>{children}</bookContext.Provider>;
};

export default BookContext;
