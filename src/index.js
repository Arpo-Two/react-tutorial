import React from "react";
import ReactDom from "react-dom";

function App() {
  return (
    <div>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </div>
  );
}

const Book = () => (
  <div>
    <Image />
    <Title />
    <Author />
  </div>
);
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81mPCSNE+yL.jpg"
    alt=""
  ></img>
);

const Title = () => <h1>A man in love</h1>;

const Author = () => <h3>Karl Ove Knausgard</h3>;

ReactDom.render(<App />, document.getElementById("root"));
