import React,{Fragment} from 'react';
import Header from './Header'

class ItemTodo extends React.Component {

   state = {
       showTask : true,
   }

    removeTask = (id) => {
        this.setState({showTask: false})
        const data = this.props.data;
        data.splice(data.id,1);
        this.setState({data})
    }

    isChecked = (id) => {
        const data = this.props.data
        const elem = data.find(elem=> elem.id === id)
        elem.completed = !elem.completed
    }

    render() {
        const {showTask} = this.state
        const {inputValue, id, completed} = this.props.elem
        console.log(this.props.data)
        return( 
            <Fragment>
            {
               showTask &&  <div  className="item-list">
                            <input type="checkbox"  
                            /* checked={completed} */
                            onChange={() => this.isChecked(id)}
                            />  
                            {inputValue} 
                            <span onClick={() => this.removeTask(id)}>X</span>
                        </div>
            }
            </Fragment>
        )
    }
}


export default ItemTodo;