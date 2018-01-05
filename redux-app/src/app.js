"use strict"

import {createStore} from 'redux';

// step 3 define reducers

const reducer = function(state=[], action) {
  switch(action.type) {
    case "POST_BOOK":
      let books = state.concat(action.payload);
      return books;
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
    type:"POST_BOOK",
    payload:
      [{
        id: 3,
        title: '3rd book title',
        description: '3rd book description here',
        price: 100

      }]
    });
