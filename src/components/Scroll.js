import React from 'react'

function Scroll(props) {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid #9b6109', height: '800px', borderRadius: '5px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;
