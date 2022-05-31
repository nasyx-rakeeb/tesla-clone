import React from 'react'
import DownArrow from '../UI/DownArrow'
import './Hero.css'
const Hero = (props) => {

    return (
        <>
            <div className="itemText " >
                <div className="itemText__info ">
                    <h1>{props.title}</h1>
                    <h4>
                        {props.description}
                        {props.descriptionSpan && <span>{props.descriptionSpan}</span>}
                    </h4>
                </div>
                <div className="cta_actions ">
                    <div className="cta__buttons">
                        <button className="button--primary">{props.leftButton}</button>
                        {props.rightButton &&
                            <button className="button--secondary">{props.rightButton}</button>
                        }
                    </div>
                    <DownArrow />
                </div>
            </div>
        </>
    )
}

export default Hero
