import React from 'react';
import { Button, List, ListItemText, ListItemSecondaryAction, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px', 
  marginBottom: theme.spacing(10),
  padding: theme.spacing(2),
  backgroundColor: '#f0f0f0'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#393939',
  borderRadius: '20px',
  color: 'white',
  '&:hover': {
    backgroundColor: '#070707',
  },
}));

const ReadingList = ({ books, onRemove }) => {
  return (
    <List>
      {books.map((book, index) => (
        <StyledCard key={index}>
          {/* <StyledListItem> */}
            <ListItemText primary={book.title} secondary={book.author} />
            <ListItemSecondaryAction>
              <StyledButton variant="contained" onClick={() => onRemove(book)}>
                Remove
              </StyledButton>
            </ListItemSecondaryAction>
          {/* </StyledListItem> */}
        </StyledCard>
      ))}
    </List>
  );
};

export default ReadingList;
