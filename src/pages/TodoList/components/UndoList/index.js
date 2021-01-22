import React,{Component} from 'react';
class UndoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(i) {
        this.props.deleteItem(i);
    }
    render() {
        const list = this.props.list;
        const {deleteItem} = this;
        return (
            <div className="undolist">
                <div className="undo-list-title">
                    正在进行中
                    <div data-test="count" className="count">{list.length}</div>
                </div>
             
                <ul>
                    {
                        list.map((item,i)=>{
                            return (<div
                                        className="listItem"
                                        data-test="listItem"
                                        key={`${item}-${i}`}
                                    >
                                        {
                                            item
                                        }
                                        <div 
                                          onClick={()=>deleteItem(i)}
                                          data-test="delete-item"
                                          className="delete-item"
                                        >-</div>
                                    </div>)
                                })
                    }
                </ul>
            </div>
        );
    }
}
export default UndoList;