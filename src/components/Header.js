import React,{Fragment} from 'react';
import ItemTodo from './ItemTodo';



class Header extends React.Component {

    state = {
        allStateChecked : false
    }

    renderItems = (e) => {
        const {arrayOfTask} = this.props.data;
        let newItem = null;

        if(arrayOfTask.length) {
            newItem = this.props.generateArray().map((e,i,a) => {
                return <ItemTodo key={(i+1).toString()} elem={e} data={arrayOfTask} />
            })
        } 
        return newItem; 
    }

    allChecked = () => {
        const {allStateChecked} = this.state
        const {arrayOfTask} = this.props.data;
        this.setState( { allStateChecked : !allStateChecked })
        arrayOfTask.map(elem => {
            elem.completed = allStateChecked
        })
    }

    render() {
        return( 
            <Fragment>
            <span onClick={this.allChecked}>X</span>
            <input value={this.props.data.inputValue}
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