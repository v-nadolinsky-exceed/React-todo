import React from 'react';

class ItemTodo extends React.Component {


    render() {
        const {inputValue, id, completed, completedTask} = this.props;
        return( 
            <div className="item-todo">
                <input type="checkbox"
                    checked={completed}
                    onChange={() => completedTask(id)}
                />  
                {inputValue} 
                <span onClick={() => {this.props.removeTask(id)}}>X</span>
            </div>
        )
    }
}


export default ItemTodo;