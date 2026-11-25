import type { IBooks } from '@/type/books';

export const getBooksProps = async (): Promise<IBooks[]> => {
    const res = await fetch('http://localhost:3000/data.json');
    if (!res.ok) {
        console.log('api fetchin problem');
    }
    return res.json();
};

export const getBooksDetails = async (id: number): Promise<IBooks> => {
    const res = await fetch(`http://localhost:3000/data.json/${id}`);
    if (!res.ok) {
        console.log('api fetchin problem');
    }
    return res.json();
};
