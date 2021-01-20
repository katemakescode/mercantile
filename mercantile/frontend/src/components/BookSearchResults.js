import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BookCard from "./BookCard";
import bookData from "../book-data.json";

function BookSearchResultsList({books}) {
  return (<>{books.filter(book => book.saleInfo.retailPrice).slice(0, 2).map(book =>
      <BookCard key={book.id} book={{
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        price: book.saleInfo.retailPrice.amount,
        imgUrl: book.volumeInfo.imageLinks.smallThumbnail,
      }} />,
  )}</>);
}

BookSearchResultsList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  })).isRequired,
};

function DefaultBookList() {
  return <h4 >display hardcoded classics</h4 >;
}

export default function BookSearchFetch({query = null}) {
  if (!query) {
      return <DefaultBookList />
  }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&country=US&filter=paid-ebooks`)
        .then(response => response.json())
        .then(response => setItems(response.items))
        .then(() => setIsLoaded(true))
        .catch(setError);
  }, [isLoaded]);

  if (error) return <pre >JSON.stringify(error, null, 2)</pre >;
  if (!isLoaded) return <h4 >Loading results...</h4 >;

  if (items) {
    return (
        <BookSearchResultsList books={items} />
    );
  }
}

