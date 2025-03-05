import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BookCard from "../Components/BookCard";

const FavouritesView = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavouriteBooks(favourites);
  }, []);

  return (
    <Container>
      <Title>Your Favourite Books</Title>
      {favouriteBooks.length > 0 ? (
        <BookList>
          {favouriteBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </BookList>
      ) : (
        <p>No favourite books found.</p>
      )}
    </Container>
  );
};

export default FavouritesView;

/* Styled Components */
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 24px;
`;

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 900px;
`;
