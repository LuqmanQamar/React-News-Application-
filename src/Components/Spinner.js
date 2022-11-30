import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-auto'>
                <img className='my-5' src={loading} alt="" />
            </div>
        )
    }
}

export default Spinner
