import React,{Fragment} from 'react';
import Header from './Header'

class ItemTodo extends React.Component {

   state = {
       show : true,
       
   }

    clickClear = (key) => {
        this.setState({show: false})
        const elem = this.props.elem;
        elem.splice(key,1);
        this.setState({elem})
    }

    render() {
        const {show} = this.state

        return( 
            <Fragment>
            {
               show &&  <div  className="item-list">
                            <input type="checkbox"  
                            /> 
                            {this.props.data} 
                            <span onClick={() => this.clickClear(this.key)}>X</span>
                        </div>
            }
            </Fragment>
        )
    }
}


export default ItemTodo;