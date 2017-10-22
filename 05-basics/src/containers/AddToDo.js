import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

/**
 * Add a new to do item.
 * @param { dispatch } An object with a method to be invoked when a new to do item is added.
 * @returns A component to add a new to do item.
 * @constructor
 */
const AddToDoView = ({ dispatch }) => {
  // A forward reference to the input element.
  let input;
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (! input.value.trim()) {
          return;
        }
        
        dispatch(addToDo(input.value.trim()));
        input.value = '';
      }}
      >
        <input ref={node => {input = node}} />
        <button type="Submit">
          Add To Do
        </button>
      </form>
    </div>
  );
};

const AddToDo = connect()(AddToDoView);

export default AddToDo;
