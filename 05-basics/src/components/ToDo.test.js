import React from 'react';
import { shallow } from 'enzyme';
import ToDo from './ToDo';

describe('ToDo renders', () => {
  it('passes a canary test', () => {
    expect(true).toBe(true);
  });
  
  const onClickStub = jest.fn();
  function defaultProps(adjustments = {}) {
    const defaultProps = {
      text: 'pelagus',
      completed: true,
      onClick: onClickStub,
    };
    return Object.assign({}, defaultProps, adjustments);
  };
  
  it('renders a list item', () => {
    const sut = shallow(<ToDo {...defaultProps()} />);
    expect(sut).toHaveTagName('li');
  });
  
  it('with no strike-through for an incomplete item', () => {
    const sut = shallow(<ToDo {...defaultProps()} />);
    expect(sut).not.toHaveStyle();
  });
  
  it('with strike-through for a compeleted item', () => {
    const sut = shallow(<ToDo {...defaultProps({ completed: true })} />);
    expect(sut).toHaveStyle('textDecoration', 'line-through');
  });
  
  it('with a callback from props invoked when clicked', () => {
    const sut = shallow(<ToDo {...defaultProps()} />);
    sut.find('li').simulate('click');
    expect(onClickStub).toHaveBeenCalledTimes(1);
  });
  
  it('with the text of the to do item', () => {
    const sut = shallow(<ToDo {...defaultProps()} />);
    expect(sut).toHaveText('pelagus');
  });
});