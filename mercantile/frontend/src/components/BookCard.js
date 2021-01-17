import React from "react";

export default function BookCard({book}) {
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