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
        expect(wrapper.state('undoList')[0]).toEqual('learn react');
    });
    
    it('当渲染TodoList时，要给UndoList传list和deleteItem',()=>{
        const wrapper = shallow(<TodoList/>);
      
        expect(wrapper.find('UndoList').prop('list')).toBeTruthy();
        expect(wrapper.find('UndoList').prop('deleteItem')).toBeTruthy();
         
    });
    it('点击deleteItem时 删除对应的数据',()=>{
        const wrapper = shallow(<TodoList/>);
        wrapper.setState({
            undoList:['1','2']
        });
        const deleteItem = wrapper.instance().deleteItem;
        deleteItem(0);
        expect(wrapper.state('undoList')).toEqual(['2']);
         
    });
    
});
