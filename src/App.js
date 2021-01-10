import React from 'react';
import cardList from './cardList';
import {robots} from './robots';



const App = () => {
    return(
        <cardList robots={robots}/>
    );
}

export default App;