import React, {Component} from 'react'
import AddressCard from './AddressCard';
import data from "./data"
import Nav from "./Nav"


export default class AddressBook extends Component {
    constructor(){
        super();
        this.state = {
            data,
            index: 0
        }
    }

increaseIndex = () => {
    if(this.state.index < this.state.data.length -1){
        this.setState({index: this.state.index + 1});
    }

}

decreaseIndex = () => {
    if(this.state.index > 0){
        this.setState({index: this.state.index - 1});
    }
}



    render(){
        return (
            <div className='container'>
                <AddressCard data={this.state.data} index={this.state.index}/>
                <Nav increase={this.increaseIndex} decrease={this.decreaseIndex}/>
            </div>
        )}
}
