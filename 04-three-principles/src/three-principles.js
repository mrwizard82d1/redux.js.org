import { combineReducers, createStore } from 'redux';

// The _state_ of your whole application is stored in an object tree within a single _store_.

const initialState = {
  visibilityFilter: 'SHOW_All',
  toDos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false,
    },
  ],
};

// The only way to change state is to emit an _action_, an object describing what is to / did
// happen.

function addToDo(text) {
  return {
    type: 'ADD_TODO',
    text,
  };
}

function toggleToDo(index) {
  return {
    type: 'TOGGLE_TODO',
    index,
  };
}

function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
}

function visibilityFilter(state='SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

function toDos(state=[], action) {
  switch(action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      {
        text: action.text,
        completed: false,
      },
    ];
  case 'TOGGLE_TODO':
    return state.map((toDo, index) => {
      if (index === action.index) {
        return Object.assign({}, toDo, {completed: true});
      } else {
        return toDo;
      }
    });
  default:
    return state;
  }
}

// Combine (compose) the reducers.
const reducer = combineReducers({
    visibilityFilter,
    toDos,
  });

// Create the store using the reducer to change state.
const store = createStore(reducer, initialState);

export default function threePrinciples() {
  // The initial state.
  console.log('Initial state');
  console.log(store.getState());
  
  // Add a new task
  store.dispatch(addToDo('Change state by actions'))
  console.log('Change state by actions ');
  console.log(store.getState());
  
  // And another
  store.dispatch(addToDo('Use pure functions to make changes'))
  console.log('Use pure functions to make changes');
  console.log(store.getState());
  
  // Complete this task.
  store.dispatch(toggleToDo(1));
  console.log('After toggle to do');
  console.log(store.getState());
  
  // Show 'em all.
  store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));
  console.log('Show completed');
  console.log(store.getState());
}
