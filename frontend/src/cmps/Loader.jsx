import React from 'react'

export function Loader() {
    const loader = require('../assets/imgs/loading.svg')
    return (
        <div><img className="loader" src={loader} alt="Loading..." /></div>
    )
}
