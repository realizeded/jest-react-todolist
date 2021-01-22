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
    }
    addListItem(value) {
        this.setState({
            undoList:[...this.state.undoList,value]
        })
    }
    deleteItem(i) {
        const newList = this.state.undoList;
        newList.splice(i,1);
        this.setState({
            undoList:[...newList]
        })
    }
    render() {
        const {addListItem,deleteItem} = this;
        const {undoList} = this.state;
        return (
            <div>
                <Header addListItem={addListItem}/>
                <UndoList list={undoList} deleteItem={deleteItem}/>
            </div>
        );
    }
}
export default TodoList;