import React from "react";

const Book = ({ book }) => {
  const { title, description } = book.volumeInfo;
  const availability = book.totalItems;

  return (
    <div className="book-item  p-2 m-2 border rounded w-full flex flex-col gap-10 ">
      <h3 className="book-title">{title}</h3>
      <p className="book-description h-5 overflow-hidden">{description}...</p>
      <button className="book-availability">Availability: {availability !=0 ? "Rent":"Not available"}</button>
    </div>
  );
};

export default Book;
