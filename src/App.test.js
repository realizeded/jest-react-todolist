import React from 'react';
import Enzyme,{shallow}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });


test('renders learn react link', () => {
      //shallow 浅渲染 只会把第一层组件渲染
      const wrapper = shallow(<App/>);//只会把App组件渲染出来
      // expect(wrapper.find('[data-test="app"]').length).toBe(1);
      // console.log(wrapper.debug()); 打印出渲染后的内容
      // expect(wrapper.find('[data-test="app"]').prop('className')).toBe('App');
      expect(wrapper.find('[data-test="app"]')).toExist();
});
