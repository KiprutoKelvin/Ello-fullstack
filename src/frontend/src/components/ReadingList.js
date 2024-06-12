import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';

const ReadingList = ({ books, onRemove }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem key={index}>
          <ListItemText primary={book.title} secondary={book.author} />
          <ListItemSecondaryAction>
            <Button variant="contained" onClick={() => onRemove(book)}>
              Remove
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
