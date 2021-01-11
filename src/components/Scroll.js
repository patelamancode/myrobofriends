import React from 'react';

const scroll = () => {
    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'650px'}}>
             {props.children}
        </div>
    )
};

export default Scroll; 