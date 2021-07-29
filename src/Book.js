import React from "react";

//make sure className is named in the actual semantic and not the component
//deconstruct props or can inject props in the paramter of arrow function
// can put the imgUrl, title, and author in place of the paramter of the component
const Book = (props) => {
  const { imgUrl, title, author } = props;
  //attribute and eventHandler
  // onClick, onMouseOver events
  const clickHandler = (e) => {
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  //must add arrow function after onClick to pass data and only show it when someone clicks
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={imgUrl} alt="" />
      <h1 onClick={() => alert("in line function")}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
