export const getMarkAsRead = () => {
    const markAsRead = localStorage.getItem('markAsRead')
    // if (markAsRead) return JSON.parse(markAsRead);
    // retutn[];
    if (markAsRead) {
        return JSON.parse(markAsRead);
    } else {
        return [];
    }
}



export const addFavorite = book => {
    const markAsRead = getMarkAsRead();
    const isExists = markAsRead.find(b => b.bookId === book.bookId);
    if (isExists) {
        alert('Already added to mark as read list')
        return;
    }
    markAsRead.push(book);
    localStorage.setItem('markAsRead', JSON.stringify(markAsRead));
}

export const getWishlist = () => {
    const wishlist = localStorage.getItem('wishlist')
    // if (wishlist) return JSON.parse(wishlist);
    // retutn[];
    if (wishlist) {
        return JSON.parse(wishlist);
    } else {
        return [];
    }
}

export const addToWishlist = book => {
    const wishlist = getWishlist();
    const isExists = wishlist.find(b => b.bookId === book.bookId);
    if (isExists) {
        alert('Already added to wishlist')
        return;
    }
    wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}