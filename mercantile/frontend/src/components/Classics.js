import React, {useState} from "react";

const books = [
  {id: "8171670628", title: "Anna Karenina", author: "Leo Tolstoy"},
  {id: "9781853262371", title: "Middlemarch", author: "George Eliot"},
  {id: "9780553213416", title: "Madame Bovary", author: "Gustave Flaubert"}
];

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

function Classics() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  return (<>
    <div className="d-flex justify-content-center" >
      <h3 >CLASSICS</h3 >
    </div >
    <div className="row d-flex justify-content-center" >
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div >
  </>);
}

export default Classics;

