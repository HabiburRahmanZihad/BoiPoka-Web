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