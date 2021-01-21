import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../TodoList';
Enzyme.configure({ adapter: new Adapter() });
it('Todolist 应该有一个人undolist',()=>{
    const wrapper = shallow(<TodoList/>);
    expect(wrapper.state('undoList')).toEqual([]);
});
it('Todolist 传递一个addListItem函数',()=>{
    const wrapper = shallow(<TodoList/>);
    const header = wrapper.find('Header');
    expect(header.prop('addListItem')).toBe(wrapper.instance().addListItem);
});
it('回车后会增加一个Item',()=>{
    const wrapper = shallow(<TodoList/>);
    const Header = wrapper.find('Header');
    const addFunc = Header.prop('addListItem');
    addFunc('learn react');
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toEqual('learn react');
});
