import React from 'react';
import Enzyme,{shallow,mount}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header';
Enzyme.configure({ adapter: new Adapter() });

//对样式做一个快照 从而判断样式是否更改成功
it("header 样式",()=>{
      const wrapper = shallow(<Header/>);
      expect(wrapper).toMatchSnapshot();
})

it('Header 包含一个input框', () => {
      const wrapper = shallow(<Header/>);
      expect(wrapper.find('[data-test="input"]').length).toBe(1);
});

it('Header input框默认值为空', () => {
      const wrapper = shallow(<Header/>);
      expect(wrapper.find('[data-test="input"]').prop('value')).toEqual('');
});
it('Header input值随输入改变', () => {
      const wrapper = shallow(<Header/>);
      const inputEle = wrapper.find('[data-test="input"]');
      inputEle.simulate('change',{
            target:{
                  value:'input'
            }
      });
      expect(wrapper.state('inputValue')).toEqual('input');
      // expect(inputEle.prop('value')).toEqual('');

});
it('Header input回车时如果input值是空的 则不添加', () => {
      const fn = jest.fn();
      const wrapper = shallow(<Header addListItem={fn}/>);
      const inputEle = wrapper.find('[data-test="input"]');
      wrapper.setState({inputValue:''});
      inputEle.simulate('keyup',{
            keyCode:13
      });
      expect(fn).not.toHaveBeenCalled();

});

it('Header input回车时如果input值不是空的 则添加', () => {
      const fn = jest.fn();
      const wrapper = shallow(<Header addListItem={fn}/>);
      const inputEle = wrapper.find('[data-test="input"]');
      wrapper.setState({inputValue:'input'});

      inputEle.simulate('keyup',{
            keyCode:13
      });
      expect(fn).toHaveBeenCalledWith('input');
      expect(wrapper.state('inputValue')).toEqual('');
});