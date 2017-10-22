import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default VisibleToDoList;
