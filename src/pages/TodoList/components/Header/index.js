import React from 'react';
import {actionsCreator} from '../../store';
import {connect} from 'react-redux';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    }
    handleInputKeyUp(e) {
        if(e.keyCode===13&&this.props.inputValue) {
            this.props.addListItem(this.props.inputValue);
            this.props.handleInputChange('');
        }
    }

    render() {
        const {inputValue,handleInputChange} = this.props;
        const {handleInputKeyUp} = this;
        return (
                <div className="header">
                    <div className="header-content">
                        <div>
                            TodoList
                        </div>
                        <input type="text" data-test="input" placeholder="Add ToDo" value={inputValue} 
                        onKeyUp={handleInputKeyUp}
                        onChange={e=>handleInputChange(e.target.value)}/>
                    </div>
                </div>
            );
    }
}
const mapStateToProps = function(state) {
    return {
        inputValue:state.todo.inputValue
    }
};
const mapDispatchToProps = function(dispatch) {
    return {
        handleInputChange(value) {
            dispatch(actionsCreator.CHANGE_INPUT_VALUE(value));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);