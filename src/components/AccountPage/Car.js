import React from 'react'
import Button from '../UI/Button';
import './Car.css';

const Car = ({ imgSrc, model, testDrive }) => {
    return (
        <div className='car'>
            <div className='car__image'>
                <img src={imgSrc} alt='' />
            </div>
            <h2 className='car__model'>{model}</h2>
            <div className='car__actions'>
                <Button className="primary">Order</Button>
                {testDrive && <Button className="secondary btn-sm">Test Drive</Button>}
            </div>
            <p className='car__info'>
                <span>Request a Call</span> to speak with a product specialist, value
                your trade-in or apply for leasing
            </p>
        </div>
    )
}

export default Car
