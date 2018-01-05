"use strict"

import {createStore} from 'redux';

// step 3 define reducers

const reducer = function(state=0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + action.payload;
      break;

      case "DECREMENT":
        return state - action.payload;
        break;
  }
  return state;
}


// step 1 create createStore

const store = createStore(reducer);

store.subscribe(function() {
  console.log('current state is:' + store.getState());
});

// step 2 create and dispatch actions

store.dispatch({type:"INCREMENT", payload: 1});
store.dispatch({type:"INCREMENT", payload: 1});
store.dispatch({type:"DECREMENT", payload: 1});
