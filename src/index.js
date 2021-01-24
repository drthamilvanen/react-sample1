import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    title: "Such a Fun Age",
    author: "Kiley Reid",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/51TEBoy4lnL._AC_SX184_.jpg",
  },
  {
    id: 2,
    title: "Home Body",
    author: "Rupi KaurRupi Kaur",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41XWaq6RhLL._AC_SX184_.jpg",
  },
];




function BookList(){
  return (
    <section className="bookList">
      {books.map((book) => {
        const { title, author, image } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}


const Book = ({title, author, image}) => {
  // const { title, author, image } = props;
  return (
    <article className="book">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};



ReactDOM.render(<BookList />, document.getElementById("root"));