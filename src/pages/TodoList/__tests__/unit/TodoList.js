import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../TodoList';
Enzyme.configure({ adapter: new Adapter() });

describe('TodoList',()=>{
    it('应该有一个人undolist',()=>{
        const wrapper = shallow(<TodoList/>);
        expect(wrapper.state('undoList')).toEqual([]);
    });
    it('传递一个addListItem函数给·UndoList',()=>{
        const wrapper = shallow(<TodoList/>);
        const header = wrapper.find('Header');
        expect(header.prop('addListItem')).toBe(wrapper.instance().addListItem);
    });
    it('回车后会增加一个Item',()=>{
        const wrapper = shallow(<TodoList/>);
        const addFunc = wrapper.instance().addListItem;
        addFunc('learn react');
        expect(wrapper.state('undoList').length).toBe(1);
        expect(wrapper.state('undoList')[0]).toEqual({
            state:'div',
            value:'learn react'
        });
    });
    
    it('当渲染TodoList时，要给UndoList传list和deleteItem以及changeState、handleBlur、valueChange',()=>{
        const wrapper = shallow(<TodoList/>);
      
        expect(wrapper.find('UndoList').prop('list')).toBeTruthy();
        expect(wrapper.find('UndoList').prop('deleteItem')).toBeTruthy();
        expect(wrapper.find('UndoList').prop('changeState')).toBeTruthy();
        expect(wrapper.find('UndoList').prop('handleBlur')).toBeTruthy();
        expect(wrapper.find('UndoList').prop('valueChange')).toBeTruthy();
    });
    it('点击deleteItem时 删除对应的数据',()=>{
        const wrapper = shallow(<TodoList/>);
        const listData = [
            {state:"div",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        wrapper.setState({
            undoList:listData
        });
        const deleteItem = wrapper.instance().deleteItem;
        deleteItem(0);
        expect(wrapper.state('undoList')).toEqual([
            {state:"div",value:"2"},
            {state:"div",value:"3"},]);
         
    });
    it('changeState调用时，出现input',()=>{
        const wrapper = shallow(<TodoList/>);
        const listData = [
            {state:"div",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        wrapper.setState({
            undoList:listData
        });
        const changeState = wrapper.instance().changeState;
        changeState(0);
        expect(wrapper.state('undoList')).toEqual([
            {state:"input",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},]);
         
    });
    it('handleBlur调用时 修改undoList',()=>{
        const wrapper = shallow(<TodoList/>);
        const listData = [
            {state:"input",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        wrapper.setState({
            undoList:listData
        });
        const handleBlur = wrapper.instance().handleBlur;
        handleBlur(0);
        expect(wrapper.state('undoList')).toEqual([
            {state:"div",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},]);
         
    });
    it('valueChange调用 修改对应索引的数据的value',()=>{
        const wrapper = shallow(<TodoList/>);
        const listData = [
            {state:"div",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        wrapper.setState({
            undoList:listData
        });
        const valueChange = wrapper.instance().valueChange;
        valueChange(0,'1234');
        expect(wrapper.state('undoList')).toEqual([
            {state:"div",value:"1234"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},]);
         
    });
});
