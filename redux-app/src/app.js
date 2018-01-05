"use strict"

import {createStore} from 'redux';

// step 3 define reducers

const reducer = function(state={books: []}, action) {
  switch(action.type) {
    case "POST_BOOK":
      return {books: [...state.books, ...action.payload]};
      break;
    case "DELETE_BOOK":
    // create copy of current array of books
    const currentBookToDelete = [...state.books];
    // determine which index the book should be deleted at
    const indexToDelete = currentBookToDelete.findIndex(
      function(book) {
        return book.id === action.payload.id;
      }
    )

    // use slice to remove the book at the specified indexToDelete
    return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]};
    break;

  }
  return state;
}


// step 1 create createStore

const store = createStore(reducer);

store.subscribe(function() {
  console.log('current state is:', store.getState());
});

// step 2 create and dispatch actions

store.dispatch({
  type:"POST_BOOK",
  payload:
    [{
      id: 1,
      title: 'book title',
      description: 'book description here',
      price: 33.33

    },
    {
      id: 2,
      title: 'second book title',
      description: 'second book description here',
      price: 50.00

    }]
  });

  store.dispatch({
    type:"DELETE_BOOK",
    payload:
      {
        id: 1
      }
    });
