import React from 'react';
import PropType from 'prop-types';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }
  
  return (
    <a href='#overTheRainbow' onClick={(e) => { e.preventDefault(); onClick(); }}>{children}</a>
  )
};

Link.propTypes = {
  active: PropType.bool.isRequired,
  children: PropType.node.isRequired,
  onClick: PropType.func.isRequired,
};

export default Link;
