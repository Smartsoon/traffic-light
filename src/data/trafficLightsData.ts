import { ITrafficLightItem, TrafficLightColor } from "../models/trafficLightsModels";

export const trafficLights: ITrafficLightItem[] = [
    {
        id: TrafficLightColor.RED,
        activeColor: 'red'
    },
    {
        id: TrafficLightColor.YELLOW,
        activeColor: 'yellow'
    },
    {
        id: TrafficLightColor.GREEN,
        activeColor: 'green'
    }
]