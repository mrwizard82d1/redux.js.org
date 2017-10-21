import React from "react";
import PropTypes from 'prop-types';

/**
 * Render a single to do item
 * @param props The props for the rendered element
 * @returns The rendered element
 * @constructor
 */
const ToDo = ({text, completed, onClick}) => {
  return (
    <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</li>
  );
};

ToDo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToDo;
