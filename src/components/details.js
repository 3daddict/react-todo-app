import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';
import NavBtn from './nav_btn';

class Details extends Component {
    state = {
        item: {},
    }

    componentDidMount() {
        this.getToDoItem();
    }

    async getToDoItem() {
        const { itemId } = this.props.match.params;

        try {
            const response = await axios.get(`${config.API_URL}/todos/${itemId+config.API_KEY}`);

            console.log('Response:', response.data.todo);
    
            this.setState({
                item: response.data.todo
            });
        } catch(err) {
            this.setState({
                item: {}
            });
        }

    }

    render() { 
        const { item } = this.state;
        console.log('Item:', this.state.item);
        if (!item) {
            return <h1>LOADING.....</h1>;
        }

        if (!item.title) {
            return (
                <div>
                    <h1 className="center">Item Details</h1>
                    <NavBtn to="/" color="purple darken-2" text="Back to List"/>
                    <h2 className="center">No Item to Display</h2>
                </div>
            )
        }
        return (
            <div>
                <h1 className="center">Item Details</h1>
                <NavBtn to="/" color="purple darken-2" text="Back to List"/>
                <h2 className="center">{ item.title }</h2>
                <h2 className="center">{ item.details}</h2>
            </div>
        )
    }
}

export default Details;