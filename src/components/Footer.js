import React from 'react';


class Footer extends React.Component {
 

    render() {
       const {setFilter,removeCompletedTask} = this.props
       const amountActiv = this.props.data.arrayOfTask.filter(item => item.completed === false)
        return ( 
            <div className="footer-flex" >
                <div className="total-active">{amountActiv.length}:item left</div>
                <button className="btn btn_all" onClick={() => setFilter('all')}>All</button>
                <button className="btn btn_active" onClick={() => setFilter('active')}>Active</button>
                <button className="btn btn_completed" onClick={() => setFilter('completed')}
                >Completed</button>
                <a href="#" onClick={removeCompletedTask}>Clear completed</a>
            </div>
        )
    }
}

export default Footer;