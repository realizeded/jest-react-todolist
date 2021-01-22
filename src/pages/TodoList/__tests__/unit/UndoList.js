import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import UndoList from '../../components/UndoList';


describe('UndoList',()=>{
    it('初始化的时候 数量为0 listItem为空',()=>{
   
        const wrapper = shallow(<UndoList list={[]}/>);
        expect(wrapper.find('[data-test="count"]').text()).toEqual('0');
        expect(wrapper.find('[data-test="listItem"]').length).toBe(0);
    });
    it('当传递的list有内容的时候',()=>{
        const listData = [
            {state:"div",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        const wrapper = shallow(<UndoList list={listData}/>);
        expect(wrapper.find('[data-test="count"]').text()).toEqual(listData.length.toString());
        expect(wrapper.find('[data-test="listItem"]').length).toBe(listData.length);
    });
    it('有内容的时候 存在delete-item',()=>{
        const listData = [
            {state:"div",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        const wrapper = shallow(<UndoList list={listData}/>);
        expect(wrapper.find('[data-test="delete-item"]').length).toBe(listData.length);
    });
    it('点解delete-item 会删除对应索引的数据',()=>{
        const listData = [
            {state:"div",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        const fn = jest.fn();
        const wrapper = shallow(<UndoList deleteItem={fn} list={listData}/>);
        const deleteItems = wrapper.find('[data-test="delete-item"]');
        deleteItems.at(0).simulate('click');
        expect(fn).toHaveBeenLastCalledWith(0);
    });
    it('点击listitem时,会调用changeState',()=>{
        const fn = jest.fn();
        const listData = [
            {state:"div",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        const wrapper = shallow(<UndoList changeState={fn} list={listData}/>);
        wrapper.find('[data-test="listItem"]').at(0).simulate('click',0);
        expect(fn).toHaveBeenCalledWith(0);
    });
    it('调用changeState后 展示input',()=>{
        const listData = [
            {state:"input",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        const wrapper = shallow(<UndoList  list={listData}/>);
        const inputItem = wrapper.find('[data-test="input"]');
        expect(inputItem.length).toBe(1);
    });
    it('input失去焦点 handleBlur调用',()=>{
        const listData = [
            {state:"input",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        const fn = jest.fn();
        const wrapper = shallow(<UndoList handleBlur={fn}  list={listData}/>);
        const inputItem = wrapper.find('[data-test="input"]');
        inputItem.at(0).simulate('blur');
        expect(fn).toHaveBeenLastCalledWith(0);
    });
    it('input值change后 会修改数据',()=>{
        const listData = [
            {state:"input",value:"1"},
            {state:"div",value:"2"},
            {state:"div",value:"3"},
        ];
        const fn = jest.fn();
        const wrapper = shallow(<UndoList valueChange={fn}  list={listData}/>);
        const inputItem = wrapper.find('[data-test="input"]');
        inputItem.at(0).simulate('change',{
            target:{
                value:'123'
            }
        });
        expect(fn).toHaveBeenLastCalledWith(0,'123');
    });
});
