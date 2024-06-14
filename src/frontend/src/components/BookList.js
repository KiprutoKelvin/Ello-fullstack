import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px', 
  marginBottom: theme.spacing(10),
  padding: theme.spacing(2),
  backgroundColor: '#f0f0f0'
}));

const StyledList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
  maxWidth: '70%',
  margin: '0 auto',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(5),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#393939',
  borderRadius: '20px',
  color: 'white',
  '&:hover': {
    backgroundColor: '#070707',
  },
}));

const BookList = ({ books, onAdd }) => {
  return (
    <StyledList>
      {books.map((book, index) => (
        <StyledCard key={index}>
          <StyledListItem>
            <ListItemText primary={book.title} secondary={book.author} />
            <ListItemSecondaryAction>
              <StyledButton variant="contained" onClick={() => onAdd(book)}>
                Add to Reading List
              </StyledButton>
            </ListItemSecondaryAction>
          </StyledListItem>
        </StyledCard>
      ))}
    </StyledList>
  );
};

export default BookList;