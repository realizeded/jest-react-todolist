import * as constant from './constant';
const defaultState = {
    inputValue:"12"
};
function reducer(state=defaultState,action) {
    switch(action.type) {
        case constant.CHANGE_INPUT_VALUE:
            return{
                inputValue:action.value
            };break;
      
    } 
    return state
}
export default reducer;