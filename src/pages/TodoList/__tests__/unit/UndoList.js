import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import UndoList from '../../components/UndoList';
it('初始化的时候 数量为0 listItem为空',()=>{
   
    const wrapper = shallow(<UndoList list={[]}/>);
    expect(wrapper.find('[data-test="count"]').text()).toEqual('0');
    expect(wrapper.find('[data-test="listItem"]').length).toBe(0);
});
it('当传递的list有内容的时候',()=>{
    const listData = ['1','2','4'];
    const wrapper = shallow(<UndoList list={listData}/>);
    expect(wrapper.find('[data-test="count"]').text()).toEqual(listData.length.toString());
    expect(wrapper.find('[data-test="listItem"]').length).toBe(listData.length);
});
it('当UndoList有内容的时候 存在delete-item',()=>{
    const listData = ['1','2','4'];
    const wrapper = shallow(<UndoList list={listData}/>);
    expect(wrapper.find('[data-test="delete-item"]').length).toBe(listData.length);
});
it('点解delete-item 会删除对应索引的数据',()=>{
    const listData = ['1','2','4'];
    const fn = jest.fn();
    const wrapper = shallow(<UndoList deleteItem={fn} list={listData}/>);
    const deleteItems = wrapper.find('[data-test="delete-item"]');
    deleteItems.at(0).simulate('click');
    expect(fn).toHaveBeenLastCalledWith(0);
});