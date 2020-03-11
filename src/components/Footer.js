import React from 'react';


class Footer extends React.Component {
 

    render() {
       /*  console.log(this.props.data.swith) */
       const {all, active , completed , itemLeft ,removeCompletedTask} = this.props
        return ( 
            <div className="footer-flex" >
                <div className="total-active">{itemLeft()}:item left</div>
                <button className="btn btn_all" onClick={all}>All</button>
                <button className="btn btn_active" onClick={active}>Active</button>
                <button className="btn btn_completed" onClick={completed}
                >Completed</button>
                <a href="#" onClick={removeCompletedTask}>Clear completed</a>
            </div>
        )
    }
}

export default Footer;