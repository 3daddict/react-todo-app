import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import AddItem from './add_items';
import List from './list'
import dummyListData from '../dummy_data/list_data';

class App extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        this.getListData();
    }

    getListData() {
        //Call server to get data

        this.setState({
            list: dummyListData
        });
    }

    addItem = (item) => {
        item._id = new Date().getTime();

        this.setState({
            list: [item, ...this.state.list]
        });
    }

    deleteItem = index => {
        const {list} = this.state;

        const listCopy = list.slice(); //makes a copy of the array to modify
        listCopy.splice(index, 1);

        this.setState({
            list: listCopy //set state to the new list
        });
    }

    render() {
        const {list} = this.state;

        return (
            <div className="container">
                <h1 className="center">Todo App</h1>
                <AddItem add={this.addItem} />
                <List data={list} delete={this.deleteItem} />
            </div>
        );
    }
}

export default App;
