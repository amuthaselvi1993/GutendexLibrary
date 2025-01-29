import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import BookCard from "../Components/BookCard";
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.3);
  }
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
const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 900px;
`;

const HomeView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, error, resultBooks, setResultBooks, setLoading, setError } =
    useContext(AppContext);
  // Function to fetch books
  const handleSearch = async () => {
    if (!searchQuery.trim()) return; // Prevent empty search

    try {
      setError(null);
      setLoading(true);
      const formattedQuery = searchQuery.replace(/\s/g, "%20");
      const response = await fetch(
        `https://gutendex.com/books/?search=${formattedQuery}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch books with search word: ${searchQuery}`
        );
      }

      const data = await response.json();
      console.log(data);
      setResultBooks(data.results); // Store books in context
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Welcome to the Homepage</Title>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Please enter book name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchContainer>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <BookList>
        {resultBooks && resultBooks.length > 0 ? (
          resultBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </BookList>
    </Container>
  );
};

export default HomeView;
