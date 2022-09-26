export enum TrafficLightColor {
    GREEN = 'GREEN',
    YELLOW = 'YELLOW',
    RED = 'RED'
}

export interface ITrafficLightItem {
    id: TrafficLightColor
    activeColor: string
}