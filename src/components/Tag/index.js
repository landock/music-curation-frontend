import React from 'react'

function Tag({data}){

    return <span style={{background: 'red', color: 'white', display: 'inline-block', margin: '5px', padding: '5px'}}>{data.title}</span>
}

export default Tag

