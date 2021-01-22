import React from 'react';
import Header from './components/Header'
import UndoList from './components/UndoList'
import './style.css';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            undoList:[]
        }
        this.addListItem = this.addListItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeState = this.changeState.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.valueChange = this.valueChange.bind(this);
    }
    valueChange(index,value) {
        const newList = this.state.undoList.map((state,i)=>{
            if(i===index) {
                return {
                    ...state,
                    value
                }
            }
            return state;
        });
        this.setState({
            undoList:newList
        })
    }
    changeState(index) {
        const newList = this.state.undoList.map((state,i)=>{
            if(i===index) {
                return {
                    state:'input',
                    value:state.value
                }
            }
            return {
                state:'div',
                value:state.value
            }
        });
        this.setState({
            undoList:newList
        })
    }
    addListItem(value) {
        this.setState({
            undoList:[...this.state.undoList,{
                state:'div',
                value
            }]
        })
    }
    deleteItem(i) {
        const newList = this.state.undoList;
        newList.splice(i,1);
        this.setState({
            undoList:[...newList]
        })
    }
    handleBlur(index) {
        const newList = this.state.undoList.map((state,i)=>{
            if(i===index) {
                return {
                    state:'div',
                    value:state.value
                }
            }
            return state;
        });
        this.setState({
            undoList:newList
        })
    }
    render() {
        const {valueChange,addListItem,deleteItem,changeState,handleBlur} = this;
        const {undoList} = this.state;
        return (
            <div>
                <Header addListItem={addListItem}/>
                <UndoList valueChange={valueChange} handleBlur={handleBlur} list={undoList} deleteItem={deleteItem} changeState={changeState}/>
            </div>
        );
    }
}
export default TodoList;