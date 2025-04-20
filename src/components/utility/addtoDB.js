import Swal from 'sweetalert2'
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
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already added to Mark as Read",
            footer: '<a href="/">Why do I have this issue?</a>'
        });
        return;
    } else {
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Added to Mark as Read",
            footer: '<a href="/">Why do I have this issue?</a>'
        });
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
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already added to Wishlist",
            footer: '<a href="/">Why do I have this issue?</a>'
        });
        return;
    }
    else {
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Added to Wishlist",
            footer: '<a href="/">Why do I have this issue?</a>'
        });
    }
    wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}