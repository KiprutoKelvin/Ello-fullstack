import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';

const BookList = ({ books, onAdd }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem key={index}>
          <ListItemText primary={book.title} secondary={book.author} />
          <ListItemSecondaryAction>
            <Button variant="contained" onClick={() => onAdd(book)}>
              Add to Reading List
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
