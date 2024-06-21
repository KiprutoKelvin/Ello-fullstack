import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { gql, useQuery } from '@apollo/client';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

const BOOKS_QUERY = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const App = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    if (data) {
      setSearchResults(data.books);
    }
  }, [data]);

  const handleSearch = (query) => {
    if (data) {
      const results = data.books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleAddBook = (book) => {
    setReadingList([...readingList, book]);
  };

  const handleRemoveBook = (bookToRemove) => {
    setReadingList(readingList.filter(book => book.title !== bookToRemove.title));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: 404</p>;

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Ello Book
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Book List
          </Typography>
          <BookList books={searchResults} onAdd={handleAddBook} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Reading List
          </Typography>
          <ReadingList books={readingList} onRemove={handleRemoveBook} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
