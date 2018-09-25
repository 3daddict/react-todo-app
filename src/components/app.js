import 'materialize-css/dist/css/materialize.min.css'
import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import AddItem from './add_items';
import List from './list'
import Details from './details';
import NotFound from './not_found';


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=msalvatikey';

class App extends Component {

    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/add-item" component={AddItem} />
                    <Route path="/item/:itemId" component={Details} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
