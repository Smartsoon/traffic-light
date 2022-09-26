import React from 'react';
import './index.css'

export interface ITrafficLight {
    isActive: boolean
    activeColor: string
}

const TrafficLight: React.FC<ITrafficLight> = (props) => {
    const {isActive, activeColor} = props
    return (
        <div className={'traffic-light'}
             style={{backgroundColor: isActive ? activeColor : 'gray'}}
        />
    )
}

export default TrafficLight