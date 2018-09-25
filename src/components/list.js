import React, {Component} from 'react';
import Axios from 'axios';
import Item from './item';
import NavBtn from './nav_btn';
import Config from '../config';

class List extends Component {

    state = {
        list: [],
        error: ''
    }

    componentDidMount() {
        this.getListData();
    }

    async getListData() {
        //Call server to get data
        try {
            const resp = await Axios.get(`${Config.API_URL}/todos${Config.API_KEY}`);

            if(!resp.data.success){
                throw new Error('Something went wrong');
            }

            this.setState({
                list: resp.data.todos
            });
            } catch(err){
                this.setState({
                    error: 'Error Retrieving this data'
                });
            }
    }

    deleteItem = async id => {
        console.log('Delete Item ID: ', id);
        await Axios.delete(`${Config.API_URL}/todos/${id + Config.API_KEY}`);
        this.getListData();
    }

    render() {
        const {error, list} = this.state;

            const listElements = list.map((item, index) => {
                return <Item key={item._id} item={item} delete={() => this.deleteItem(item._id)} />
            });

            return (
                    <div>
                        <h1 className="center">ToDo List</h1>
                    <NavBtn to="/add-item" color="blue darken-2" text="Add Item" />
                    <p className="red-text text-darken-2">{error}</p>
                        <ul className="collection">
                            {listElements}
                        </ul>
                    </div>
            );
        }
    }

export default List;