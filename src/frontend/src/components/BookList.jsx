import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const BookList = ({ books, onAdd }) => {
  return (
    <Grid container spacing={3}>
      {books.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={book.coverPhotoURL}
              alt={book.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Author: {book.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reading Level: {book.readingLevel}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
                Add to Reading List
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
