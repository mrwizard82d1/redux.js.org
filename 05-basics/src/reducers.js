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

