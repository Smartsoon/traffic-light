import './index.css'
import {trafficLights} from "../../data/trafficLightsData";
import TrafficLight from "../TrafficLight";
import {useEffect, useState} from "react";
import {TrafficLightColor} from "../../models/trafficLightsModels";
import React from 'react';

const timeoutTime = 5000

const TrafficLights: React.FC = () => {
    const [activeTrafficLight, setActiveTrafficLight] = useState<TrafficLightColor>(trafficLights[0].id)

    let trafficTimeout: any

    useEffect(() => {
        trafficTimeout = setTimeout(() => {
            trafficLightToggle()
        }, timeoutTime)
        return () => clearTimeout(trafficTimeout)
    }, [activeTrafficLight])

    const trafficLightToggle = () => {
        const currentLightIndex = trafficLights.findIndex(light => light.id === activeTrafficLight)
        const nextLightIndex = !trafficLights[currentLightIndex + 1]?.id ? 0 : currentLightIndex + 1
        setActiveTrafficLight(trafficLights[nextLightIndex]?.id)
    }

    return (
        <div className={'traffic-lights'}>
            {trafficLights.map(light => {
                return <React.Fragment key={light.id}>
                    <TrafficLight isActive={activeTrafficLight === light.id}
                                  activeColor={light.activeColor}
                    />
                </React.Fragment>

            })}
        </div>
    )
}

export default TrafficLights