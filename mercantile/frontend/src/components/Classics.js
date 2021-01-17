import React, {useEffect, useState} from "react";
import BookCard from "./BookCard";

function ClassicsBookList({books = []}) {
  return (
      books.map(book => <BookCard key={book.id} book={book} />)
  );
}

export default function Classics({books = []}) {
  return (
      <section id="classics" className="py-5" >
        <div className="d-flex justify-content-center" >
          <h3 >CLASSICS</h3 >
        </div >
        <div className="row d-flex justify-content-center" >
          <ClassicsBookList books={books} />
        </div >
      </section >
  );
}
