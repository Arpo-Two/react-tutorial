import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function App() {
  return (
    <div className="booklist">
      <Book
        index={1}
        title="A death in the family"
        img="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0995/9780099555162.jpg"
      />

      <Book
        index={2}
        title="A man in love"
        img="https://images-na.ssl-images-amazon.com/images/I/81mPCSNE+yL.jpg"
      />

      <Book
        index={3}
        title="Boyhood Island"
        img="https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_d5fe158436d9973c380460673ce6461872da1f2c.jpg"
      />
      <Book
        index={4}
        title="Dancing in the dark"
        img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1444239851l/24385884._SY475_.jpg"
      />
      <Book
        index={5}
        title="Some rain must fall"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSna1ZPyB42_MZgr9q8JK14YYPzU9by80UoS17Pzb72ob-1UqGNGoHzcXBTCjZ9wTrcYZ0&usqp=CAU"
      />
      <Book
        index={6}
        title="The End"
        img="https://m.media-amazon.com/images/I/41+pXkQorEL.jpg"
      />
    </div>
  );
}

const Book = (props) => {
  return (
    <div className="book">
      <Image img={props.img} />
      <Title title={props.title} />
      <Author />
      <p>{props.index}</p>
    </div>
  );
};
const Image = (props) => <img className="img" src={props.img} alt=""></img>;
const Title = (props) => {
  return <h1>{props.title}</h1>;
};

const Author = () => {
  const author = "Karl Ove Knausgard";

  return (
    <h3 style={{ color: "#6179d8", fontSize: "0.75rem", margin: "0.5rem" }}>
      {author}
    </h3>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
