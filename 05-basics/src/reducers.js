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

import { VisibilityFilters} from "./actions";

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
  // For now, we ignore `action` and simply return the state supplied us.
  return state;
}
