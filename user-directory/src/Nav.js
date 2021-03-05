import React, { Component} from 'react';


const Nav = (props) => {

    return (
        <div className="Nav">
            <button onClick={props.decrease} className="index-btn bold">Previous</button>
            <div>
            <button className="mod-btn bold">Edit</button>
            <button className="mod-btn bold">Delete</button>
            <button className="mod-btn bold">New</button>
            </div>
            <button onClick={props.increase} className="index-btn bold">Next</button>
        </div>
    )
}
export default Nav
