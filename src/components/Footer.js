import React from 'react';


class Footer extends React.Component {
 
    all = () => {
        const{swith} = this.props
        this.setState({swith: "all"})
    }

    active = () => {
        this.setState({swith: "active"})
    }

    completed = () => {
        this.setState({swith: "completed"})
    }

    render() {
        console.log(this.props.swith)
        return ( 
            <div className="footer-flex">
                <div className="total-active">{}:item left</div>
                <button className="btn btn_all" onClick={this.all}>All</button>
                <button className="btn btn_active" onClick={this.active}>Active</button>
                <button className="btn btn_completed" onClick={this.completed}>Completed</button>
            </div>
        )
    }
}

export default Footer;