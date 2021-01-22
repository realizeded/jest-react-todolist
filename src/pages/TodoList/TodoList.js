import React from 'react';
import Header from './components/Header'
import './style.css';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            undoList:[]
        }
        this.addListItem = this.addListItem.bind(this);
    }
    addListItem(value) {
        this.setState({
            undoList:[...this.state.undoList,value]
        })
    }
    render() {
        const {addListItem} = this;
        return (
            <div>
                <Header addListItem={addListItem}/>
                {
                    this.state.undoList.map((item,index)=>{
                        return (<div key={index}>{item}</div>);
                    })
                }
            </div>
        );
    }
}
export default TodoList;