import PropTypes from "prop-types";
import React from "react";
import BookCard from "./BookCard";
import defaultBookData from "../book-data.json";

export default function BookList({books}) {
  return (<>{books.filter(book => book.saleInfo.retailPrice).slice(0, 2).map(
      book => <BookCard key={book.id} book={book} />
  )}</>);
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string
      })
    }).isRequired,
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
          amount: PropTypes.number
      })
    }).isRequired
  })).isRequired,
};

export function DefaultBookList() {
  // window.static
  return <BookList books={defaultBookData.books} />
}
