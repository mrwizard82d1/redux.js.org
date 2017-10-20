import { createStore } from 'redux'; 

/**
 * A reducer is a funcion of two arguments, `state` and `action`, that
 * applies `action` to (an immutable) `state` to generate a new `state`.
 */
function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
            
        case 'DECREMENT':
            return state - 1;
            
        default:
            return state;
            
    }
}

export default function theGist() {
  /**
   * Create a new store with its reducer.
   */
  let store = createStore(counter);
  
  /**
   * Subscribe to all changes to `state` (reporting the current state via
   * the `console`).
   */
  store.subscribe(() =>
    console.log(store.getState())
  );
  
  /**
   * "Mutate" the `state` by applying different actions.
   */
  store.dispatch({type: 'INCREMENT'});
  /**
   * Expect "1" to be printed.
   */
  
  /**
   * "Mutate" the `state` by applying different actions.
   */
  store.dispatch({type: 'INCREMENT'});
  /**
   * Expect "2" to be printed.
   */
  
  /**
   * "Mutate" the `state` by applying different actions.
   */
  store.dispatch({type: 'DECREMENT'});
  /**
   * Expect "1" to be printed.
   */
  
  /**
   * And that's it. All of Redux in a simply package.
   */
}
