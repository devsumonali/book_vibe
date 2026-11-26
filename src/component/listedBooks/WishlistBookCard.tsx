import type { IBooks } from '@/type/books';
import ListedBookCard from './ListedBookCard';

const WishlistBookCard = ({ wishlist }: { wishlist: IBooks }) => {
    return <ListedBookCard book={wishlist} />;
};

export default WishlistBookCard;
