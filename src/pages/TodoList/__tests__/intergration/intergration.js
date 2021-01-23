import React from 'react';
import Enzyme,{mount}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../TodoList';
import {Provider} from 'react-redux';
import store from '../../../../store';
Enzyme.configure({ adapter: new Adapter() });
it(`
1.输入框输入内容
2.点击回车
3.列表项展示
`,()=>{

    const wrapper = mount(
    <Provider store={store}>
     <TodoList/>
     </Provider>
    );

    const inputEle = wrapper.find('[data-test="input"]');
    const content = 'content';
    inputEle.at(0).simulate('change',{
        target:{
            value:content
        }
    });
    inputEle.at(0).simulate('keyup',{
        keyCode:13
    });
    const listItem = wrapper.find('[data-test="listItem"]');
    expect(listItem.length).toBe(1);
});