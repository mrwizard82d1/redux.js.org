import {
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER } from "./actions";

/**
 *
 * One often begins the design effort by designing the state.
 *
const initialShape = {
  visibilityFilter: 'SHOW_ALL',
  toDos: [
    {
      text: 'Consider using Redux',
      completed: false,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false,
    },
  ],
};
 */

export const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  toDos: [],
};

/**
 * Reduce the list of things to do
 * @param state The current to do list from the state.
 * @param action The action to apply to the state.
 * @returns The new state
 */
export function toDos(state = [], action) {
  switch(action.type) {
  case ADD_TODO:
    return [
      ...state, {
      text: action.text,
      completed: false,
    }];
    
  case TOGGLE_TODO:
    return state.map((toDo, index) => (index === action.index
        ? Object.assign({}, toDo, { completed: !toDo.completed })
        : toDo));
    
  default:
    return state;
  }
}

/**
 * Our visibililty filter reducer.
 * @param state The current visibility filter.
 * @param action The action to apply to the state.
 * @returns The new state
 */
export function visibility(state = VisibilityFilters.SHOW_ALL, action) {
  switch(action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  
  default:
    return state;
  }
}

/**
 * Our combined (application) reducer.
 * @param state The current application state.
 * @param action The action to apply to the state.
 * @returns The new state
 */
export function toDoApp(state = {}, action) {
  return {
    visibilityFilter: visibility(state.visibilityFilter, action),
    toDos: toDos(state.toDos, action),
  };
}

/**
 * Note that each reducer, `toDos`, `visibility` and `toDoApp` handles a *single* part of the
 * application state:
 *
 * - `toDos`: the to do list itself
 * - `visibility`: the visibility filter
 * - `toDoApp`: the single object application statet
 *
 *
 */
