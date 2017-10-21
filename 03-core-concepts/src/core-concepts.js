const initialState = {
  toDos: [
    {
      text: 'Eat food',
      completed: true,
    },
    {
      text: 'Exercise',
      completed: false,
    },
  ],
  visibilityFilter: 'SHOW_COMPLETED',
};

// Action creators

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

// Reducers

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

// The combined reducer. Each key of the returned value corresponds to a part of our state tree.

function toDoApp(state={}, action) {
  return {
    toDos: toDos(state.toDos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}

export default function coreConcepts() {
  // The initial state.
  console.log('Initial state');
  console.log(initialState);
  
  // Add a new task
  const afterAddToDoState = toDoApp(initialState, addToDo('Go to swimming pool'));
  console.log('After add to do');
  console.log(afterAddToDoState);
  
  // Complete this task.
  const afterToggleToDoState = toDoApp(afterAddToDoState, toggleToDo(2));
  console.log('After toggle to do');
  console.log(afterToggleToDoState);
  
  // Show 'em all.
  const setVisibilityToDoState = toDoApp(afterToggleToDoState, setVisibilityFilter('SHOW_ALL'));
  console.log('Show \'em all');
  console.log(setVisibilityToDoState);
}
