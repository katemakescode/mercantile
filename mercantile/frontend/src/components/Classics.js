import React, {useEffect, useState} from "react";

function BookCard({book}) {
  return (
      <div className="card col-md-2 mx-4 mx-md-4 my-4 pt-3" >
        <a href="https://en.wikipedia.org/wiki/Anna_Karenina" >
          <div className="card-body m-0" >
            <img className="card-img-top"
                 alt="Cover of the 2000 Modern Library edition of Anna Karenina by Leo Tolstoy"
                 src={window.static + 'mercantile/img/anna_karenina.jpg'} />
            <h5 className="card-title pt-3" >{book.title}</h5 >
            <p className="card-text" >{book.author}</p >
          </div >
        </a >
      </div >
  );
}

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
