import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const firstBook={
title:"Such a Fun Age",
author:"Kiley Reid",
image:"https://images-eu.ssl-images-amazon.com/images/I/51TEBoy4lnL._AC_SX184_.jpg"
};

const secondBook = {
  title: "Home Body",
  author: "Rupi KaurRupi Kaur",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/41XWaq6RhLL._AC_SX184_.jpg",
};
function BookList(){
  return (
    <section className="bookList">
      <Books
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Books
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>
          Joyce Meyer is one of the world's leading practical Bible teachers.
          Her daily broadcast, Enjoying Everyday Life, airs on hundreds of
          television networks and radio stations worldwide
        </p>
      </Books>
    </section>
  );
}

const Books = (props) => {
  const { image, title, author ,children} = props;
  return (
    <article className="book">
      <img src={image} alt=""></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h4>{children}</h4>
    </article>
  );
};



ReactDOM.render(<BookList />, document.getElementById("root"));