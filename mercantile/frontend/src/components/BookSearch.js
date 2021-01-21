import React, {useEffect, useState} from "react";
import BookList, {DefaultBookList} from "./BookList";

export default function BookSearch({query = null}) {
  if (!query) return <DefaultBookList />;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&country=US&filter=paid-ebooks`)
        .then(response => response.json())
        .then(response => setItems(response.items))
        .then(() => setIsLoaded(true))
        .catch(setError);
  }, [query]);

  if (error) return <pre >JSON.stringify(error, null, 2)</pre >;
  if (!isLoaded) return <h4 >Loading results...</h4 >;

  if (items) {
    return (
        <BookList books={items} />
    );
  }
}

