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
 * Our combined (application) reducer.
 * @param state The current application state.
 * @param action The action to apply to the state.
 */
export function toDoApp(state = initialState, action) {
  switch(action.type) {
  case SET_VISIBILITY_FILTER:
    return Object.assign({}, state, { visibilityFilter: action.filter });
  case ADD_TODO:
    return Object.assign({}, state, {
      toDos: [...state.toDos, {
        text: action.text,
        completed: false,
      }],
    });
  case TOGGLE_TODO:
    return Object.assign({}, state, {
      toDos: state.toDos.map((toDo, index) => (index === action.index
        ? Object.assign({}, toDo, { completed: true })
        : toDo))
    });
  default:
    return state;
  }
}
