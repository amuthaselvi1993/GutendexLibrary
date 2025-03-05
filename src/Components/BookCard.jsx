import React from "react";
import styled from "styled-components";

const BookCard = ({ book }) => {
  const addToFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    favourites.push(book);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    alert(`${book.title} has been added to your favourites!`);
  };

  return (
    <Card>
      <BookImage
        src={book.formats["image/jpeg"] || "https://via.placeholder.com/150"}
        alt={book.title}
      />
      <BookTitle>{book.title}</BookTitle>
      <BookInfo>
        <strong>Author:</strong>{" "}
        {book.authors.map((author) => author.name).join(", ")}
      </BookInfo>
      <BookInfo>
        <strong>Language:</strong> {book.languages.join(", ")}
      </BookInfo>
      <BookInfo>
        <strong>Download Count:</strong> {book.download_count}
      </BookInfo>
      <Button  onClick={addToFavourites}>Add to favourites</Button>
    </Card>
  );
};

export default BookCard;

/* Styled Components */
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 25px;
  width: 220px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: #fff;
  transition: transform 0.2s ease-in-out;
  display: grid;
  grid-template-rows: 1fr 0.8fr 0.2fr repeat(3, 0.1fr);
  &:hover {
    transform: scale(1.05);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;

const BookTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
`;

const BookInfo = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 5px 0;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  color: #fff;
  background-color: #4a90e2;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #357ab8;
  }

  &:active {
    background-color: #2c6391;
  }
`;
