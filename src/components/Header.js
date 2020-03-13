import React from 'react';
import './Header.css'

class Header extends React.Component {

    render() {
        return( 
            <div className="header">
                <div 
                onClick={this.props.allCompleted}
                >
                    <button className={`arrowdown ${true && 'active'}`}></button>
                </div>
                <input 
                className="header__input"
                value={this.props.value}
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