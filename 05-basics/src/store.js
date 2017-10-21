import { createStore } from 'redux';
import {
  addToDo,
  toggleToDo,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions';
import { toDoApp } from './reducers';

const store = createStore(toDoApp);

export function demonstrate() {
  // Listen for store updates
  const unsubscribe = store.subscribe(() => console.log(store.getState()));
  
  console.groupCollapsed('store');
  console.log('Initial state');
  console.log(store.getState());
  
  const update = {
    'Add a to do': addToDo('Dolor sit'),
    'Complete a to do': toggleToDo(0),
    'Change to do visibility': setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE),
  };
  Object.keys(update).forEach(description => {
    console.log(description);
    store.dispatch(update[description]);
  });
  
  console.groupEnd();
  
  // Stop listening for store updates
  unsubscribe();
}
