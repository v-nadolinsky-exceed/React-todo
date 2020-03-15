import React from 'react';
import './ItemTodo.css'

class ItemTodo extends React.Component {
    state = {
        inputStateAfterClick: this.props.inputStateAfterClick,
        newValue: '',
        editedValue: ''
        // editedValueNew: this.props.editedValue,
        // arrayOfTask: this.props.arrayOfTask

        // text which we get frop this.props.text  for example
        // flag which help to switch between two states 
    }

    saveInput = (event) => {
        if(event.key === 'Enter') {
           /*  this.props.arrayOfTask.map(task => {
                if(task.id === id) {
                    task.inputValue = this.state.editedValue
                }
            }) */
            this.setState({
                inputStateAfterClick: true
            })
        }
     }

    newValueTask = (e) => {
        let value = e.target.value
        this.setState (state =>({
        editedValue : value,
    }))
  } 

    handlDblClick = (id) => {     
    this.setState(state => ({
        inputStateAfterClick: !state.inputStateAfterClick
    }))
        // if(this.state.inputStateAfterClick) {
            this.props.arrayOfTask.map(task => {
                if(task.id === id) {
                    task.inputValue = this.state.editedValue
                }
            })
    // }
  }


    //   shouldComponentUpdate() {
    //       return this.props.arrayOfTask 
    //   }
   

    render() {
        const {inputValue, id, completed, completedTask,removeTask, isDoubleClick,handlDblClick, newValueTask, editedValue, inputStateAfterClick ,  saveInput} = this.props;

        const arr = !this.state.inputStateAfterClick ? this.state.editedValueNew : inputValue ;
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
                <div onDoubleClick={() => this.handlDblClick(id)}>
                    <input 
                    className={`item-todo__input ${toggleCheck && 'completed'}`}
                    defaultValue={inputValue}
                    value={arr} 
                    disabled={this.state.inputStateAfterClick}
                    onKeyPress={this.saveInput}
                    // onClick={() => this.variableTask(id)}
                    onChange={this.newValueTask}
                    /> 

                </div>              
                <span onClick={() => removeTask(id)} className="close"></span>
                
            </div>               
        )
    }
}


export default ItemTodo;