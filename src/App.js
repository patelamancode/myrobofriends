import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
// import { render } from '@testing-library/react';

// this is first expression before constructor
// const state = {
//     robots: robots,
//     searchfield:''
// }


class App extends React.Component {

    constructor() {
        super()
        this.state = {
          robots: robots,
          searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log(event.target.value);
    }


    render(){
        return(
            <div className='tc '>
              <h1>Robofriends</h1>
              <SearchBox searchchange = {this.onSearchChange}/>
              <CardList robots={this.state.robots}/>
            </div>
        );
    }
    
}

export default App;