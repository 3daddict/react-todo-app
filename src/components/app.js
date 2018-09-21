import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import Axios from 'axios';
import AddItem from './add_items';
import List from './list'


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=msalvatikey';

class App extends Component {

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
            const resp = await Axios.get(`${BASE_URL}/todos${API_KEY}`);

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

    addItem = async (item) => {
        await Axios.post(`${BASE_URL}/todos${API_KEY}`, item);

        this.getListData();
    }

    deleteItem = async id => {
        console.log('Delete Item ID: ', id);

        await Axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getListData();

    }

    render() {
        const {list, error} = this.state;

        return (
            <div className="container">
                <h1 className="center">Todo App</h1>
                <AddItem add={this.addItem} />
                <p className='red-text'>{error}</p>
                <List data={list} delete={this.deleteItem} />
            </div>
        );
    }
}

export default App;
