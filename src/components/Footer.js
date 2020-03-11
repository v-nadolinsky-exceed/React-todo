import React from 'react';


class Footer extends React.Component {
 


    render() {
        return ( 
            <div className="footer-flex">
                <div className="total-active">{}:item left</div>
                <button className="btn btn_all">All</button>
                <button className="btn btn_active">Active</button>
                <button className="btn btn_completed">Completed</button>
                
            </div>
        )
    }
}

export default Footer;