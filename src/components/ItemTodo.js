import React from 'react';
import axios from 'axios';
import './ItemTodo.css'

class ItemTodo extends React.Component {
    state = {
        inputStateAfterClick: this.props.inputStateAfterClick,
        inputValue: this.props.text
    }

    saveInput = (event) => {
        if(event.key === 'Enter' ) {
            this.setState({
                inputStateAfterClick: true
            })
            this.props.getTask(event.currentTarget.id, this.state.inputValue)
        }
     }

    newValueTask = (event) => {
        let value = event.target.value
        this.setState ({inputValue : value})

    } 

    handlDblClick = () => {     
        this.setState(state => ({
            inputStateAfterClick: !state.inputStateAfterClick
        }))
    }

    render() {
        const { id, completed, completedTask,removeTask } = this.props;
        const toggleCheck = completed ? true : false;
        return( 
            <div className="item-todo">

                <label>
                    <div className="item__check"></div>
                    <div className={`check ${toggleCheck && 'active'}`}></div>
                <input  
                className="item-todo__checkbox "
                type="checkbox"
                checked={completed}
                onChange={() => completedTask(id)}
                />  
                </label>
                <div onDoubleClick={this.handlDblClick}>
                    <input 
                    id={id}
                    className={`item-todo__input ${toggleCheck && 'completed'}`}
                    value={this.state.inputValue} 
                    disabled={this.state.inputStateAfterClick}
                    onKeyPress={this.saveInput}
                    onChange={this.newValueTask}
                    /> 

                </div>              
                <span onClick={() => removeTask(id)} className="close"></span>
                
            </div>               
        )
    }
}


export default ItemTodo;