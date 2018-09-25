import React, {Component} from 'react';
import Axios from 'axios';
import NavBtn from './nav_btn';
import Config from '../config';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleAddItem = async (e) => {
        e.preventDefault();
        await Axios.post(`${Config.API_URL}/todos${Config.API_KEY}`, this.state);
        this.props.history.push('/');
    }

    render() {
        const {title, details} = this.state;
        return(
            <div>
                <h1 className="center">Add toDo Item</h1>
                <NavBtn to="/" text="Back to List" color="blue darken-2" />

                <form onSubmit={this.handleAddItem}>
                    <div className="row">
                        <div className="col s8 offset-s2">
                                <label>Title</label>
                                <input type="text" value={title} onChange={(e) => {this.setState({title: e.target.value})}} />
                            </div>
                        <div className="row">
                            <div className="col s8 offset-s2">
                                <label>Details</label>
                                <input type="text" value={details} onChange={(e) => {this.setState({details: e.target.value})}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 offset-s2 right-align">
                                <button className="btn blue darken-2">Add Item</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItem;