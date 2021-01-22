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
        const {changeState,handleBlur,valueChange} = this.props;
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
                                        onClick={()=>changeState(i)}
                                        key={i}
                                    >
                                        {
                                            item.state==='div'?(<div>{item.value}</div>):
                                            (
                                                <input onChange={(e)=>{valueChange(i,e.target.value)}} onBlur={()=>handleBlur(i)} data-test="input" type="text" value={item.value}/>
                                            )
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