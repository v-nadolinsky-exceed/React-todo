import React,{Fragment} from 'react';
import ItemTodo from './ItemTodo';



class Header extends React.Component {


    renderItems = (e) => {
        const {data} = this.props;
        let newItem = null;

        if(data.length) {
            newItem = data.map((e,i,m) => {
                return <ItemTodo key={(i+1).toString()} data={e.inputValue} elem={m} />
            })
        } 
        return newItem; 
    }

    render() {
        return( 
            <Fragment>
            <span >X</span>
            <input value={this.props.inputValue}
            onChange={this.props.handleChange}
            onKeyPress={this.props.addTask} 
            type="text"/>
            {   
                this.renderItems()
            }
            </Fragment>
        )
    }
}


export default Header;