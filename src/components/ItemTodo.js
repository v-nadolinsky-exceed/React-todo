import React from 'react';
import './ItemTodo.css'

class ItemTodo extends React.Component {
    // state = {
        // text which we get frop this.props.text  for example
        // flag which help to switch between two states 
    //     inputStateAfterClick: true,
    //     // newValue: '',
    //     // editedValue: ''
    // }


    // handlDblClick = () => {
    //     this.setState(state =>({
    //         inputStateAfterClick: !state.inputStateAfterClick
    //     }))
    // }

    // newValueTask = (e) => {
    //     let value = e.target.value
    //     // console.log(value)
    //    this.setState ({
    //       editedValue : value,
    //    })
    //   }

    // saveInput = (event) => {
    //    if(event.key === 'Enter') {
    //     //    const new = [...this.props.inputValue, this.state.editedValue]
    //     // let task = this.props.inputValue.filter(task => {
    //     //    return task.id === id
    //     // })
    //     // task.inputValue = this.state.editedValue
    //        this.setState({
    //         //    newValue: ,
    //            inputStateAfterClick: true
    //        })
    //    }
    // }

    render() {
        const {inputValue, id, completed, completedTask,removeTask, isDoubleClick,handlDblClick, newValueTask, editedValue, inputStateAfterClick ,value} = this.props;
        // console.log(inputValue)
        // console.log(this.state.editedValue)
        // const arr = inputStateAfterClick ? editedValue : inputValue 
        return( 
            <div className="item-todo">

                <label>
                    <div className="item__check"></div>
                <input  
                className="item-todo__checkbox"
                type="checkbox"
                checked={completed}
                onChange={() => completedTask(id)}
                />  
                </label>
                <div onDoubleClick={handlDblClick}>
                    <input 
                    onselectstart="return false" onmousedown="return false"
                    className="item-todo__input"
                    defaultValue={inputValue}
                    value={editedValue} 
                    disabled={inputStateAfterClick}
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