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
            <div>
                <div data-test="count">{list.length}</div>
                <ul>
                    {
                        list.map((item,i)=>{
                            return (<div
                                        data-test="listItem"
                                        key={`${item}-${i}`}
                                    >
                                        {
                                            item
                                        }
                                        <span 
                                          onClick={()=>deleteItem(i)}
                                          data-test="delete-item"
                                        >
                                            -
                                        </span>
                                    </div>)
                                })
                    }
                </ul>
            </div>
        );
    }
}
export default UndoList;