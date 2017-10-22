import { connect } from 'react-redux';
import { toggleToDo, VisibilityFilters } from '../actions';
import ToDoList from '../components/ToDoList';

function visibleToDos(toDos, filter) {
  switch(filter) {
  case VisibilityFilters.SHOW_ALL:
    return toDos;
    
  case VisibilityFilters.SHOW_ACTIVE:
    return toDos.filter(toDo => !toDo.completed);
    
  case VisibilityFilters.SHOW_COMPLETED:
    return toDos.filter(toDo => toDo.completed);
    
  default:
    throw new Error(`Unexpected filter: ${filter}`);
  }
}

const mapStateToProps = (state) => ({
  toDos: visibleToDos(state.toDos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToDoClick: id => dispatch(toggleToDo(id)),
});

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default VisibleToDoList;
