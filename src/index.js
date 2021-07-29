import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//import data from books.js

import { books } from "./books";
//can name Book whatever you want since it's a default export
import Book from "./Book";

// Nested Components, React Tools

/*
const names = ["john", "meky", "susan"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});*/

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //the ... allows us to send the direct object of the book as a prop instead of creating
        // a new object and setting it eqaul to the book
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//aleternative way to ajust styling (results in in-line css)
//curly bracket brings you back to js world
//second curly bracket for the object

//USING JS VARIABLES IN COMPONENT
// can't declare veriables in a return block {} can only pass values

//telling the ReactDom to render a component in the html's root
ReactDom.render(<BookList></BookList>, document.getElementById("root"));

//to tell it it's a component we need to captilize the name of the function
//must return html as jsx
//stateless functional component

//JSX rules
// Must return an element as well as a single element (one div)
// by convention make sure to follow Html semantics (don't make eveyrthing a div)
// can wrap in a React.Fragment as an alternative
// could just use empty brackets as well
//must use camelCase for html attribute
// className instead of class
// close every element even if it doesnt have one in basic html for example an img must be followed by /img
// add parenthesis after return to make sure everything is rendered properly

/*function Greeting() {
  return (
    <>
      <div>
        <div>
          <h2>Ahmed Meky</h2>
          <p>this is my message</p>
        </div>
      </div>
    </>
  );
}*/

//this alternative way of creating components makes things a lot messier;
// this is what happens under the hood when we return a jsx in the previous method
/*const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
};*/
