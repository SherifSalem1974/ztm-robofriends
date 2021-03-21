import React from 'react'

function Scroll(props) {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid darkorange', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;