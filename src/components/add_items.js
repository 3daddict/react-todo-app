import React, {Component} from 'react';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleAddItem = (e) => {
        e.preventDefault();
        this.props.add(this.state);
    }

    render() {
        const {title, details} = this.state;
        return(
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
        )
    }
}

export default AddItem;