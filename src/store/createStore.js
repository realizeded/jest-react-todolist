import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {reducer as todoReducer} from '../pages/TodoList/store';

const middleWares = [];
const reducer = combineReducers({
    todo:todoReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
function createStoreInstance() {
    return createStore(reducer,composeEnhancers(applyMiddleware(...middleWares)));
}
export default createStoreInstance;