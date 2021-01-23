import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function BookList(){
  return (
    <section className="bookList">
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
    </section>
  );
}

const Books = () =>{
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}
const Image = () => (
  <img src="https://images-eu.ssl-images-amazon.com/images/I/51TEBoy4lnL._AC_SX184_.jpg" alt="Such a fun age"></img>
);
const Title = () => (
  <h2>
    Such a Fun Age
  </h2>
);
const Author = () => <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>Kiley Reid</h4>;


ReactDOM.render(<BookList />, document.getElementById("root"));