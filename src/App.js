import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css'

// this is first expression before constructor
// const state = {
//     robots: robots,
//     searchfield:''
// }


class App extends React.Component {

    constructor() {
        super()
        this.state = {
          robots: [],
          searchfield: ''
        }
    }

    
    componentDidMount() {
        console.log(hoiijoi);
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc '>
              <h1 className='f1'>Robofriends</h1>
              <SearchBox searchchange = {this.onSearchChange}/>
              <CardList robots={filteredRobots}/>
            </div>
        )
       
    }  
             
    
}

export default App;