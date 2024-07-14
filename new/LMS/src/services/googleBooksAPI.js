export const fetchBookByISBN = async (isbn) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
  const data = await response.json();
  return data.items ? data.items[0] : null;
};

export const fetchBookByTitle = async (title) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
  const data = await response.json();
  return data.items ? data.items[0] : null;
};
