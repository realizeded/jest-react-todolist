import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    }
    handleInputKeyUp(e) {
        if(e.keyCode===13&&this.state.inputValue) {
            this.props.addListItem(this.state.inputValue);
            this.setState({inputValue:''});
        }
    }
    handleInputChange(e) {
        this.setState(()=>{
            return {
                inputValue:e.target.value
            }
        })
    }
    render() {
        const {inputValue} = this.state;
        const {handleInputChange,handleInputKeyUp} = this;
        return (
                <div>
                    <input type="text" data-test="input" value={inputValue} 
                    onKeyUp={handleInputKeyUp}
                    onChange={handleInputChange}/>
                </div>
            );
    }
}
export default Header;