import React from 'react';

class Header extends React.Component {

    render() {
        return( 
            <div className="header">
                <span onClick={this.props.allCompleted}>X</span>
                <input value={this.props.value}
                onChange={this.props.handleChange}
                onKeyPress={this.props.addTask} 
                type="text"
                placeholder="What needs to be done?"
                />
            </div>
        )
    }
}


export default Header;