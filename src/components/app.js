import 'materialize-css/dist/css/materialize.min.css'
import {Route} from 'react-router-dom';
import React, {Component} from 'react';
import AddItem from './add_items';
import List from './list'


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=msalvatikey';

class App extends Component {

    render() {
        return (
            <div className="container">
                <Route exact path="/" component={List} />
                <Route path="/add-item" component={AddItem} />
            </div>
        );
    }
}

export default App;
