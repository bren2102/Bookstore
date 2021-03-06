import { CHANGE_FILTER } from '../actions/index';

function filter(state = [], action = null) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filter;
