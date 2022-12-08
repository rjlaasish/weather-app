export interface IWeatherListItem {
    dt: string,
    dt_txt: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    }
    weather: IWeatherType[],
    clouds: { all: number },
    wind: { speed: number, deg: number }
    rain: { "3h": number },

}

export interface IWeatherType {
    id: number,
    main: string,
    description: string,
    icon: string
}


export interface IPoint {
    lat: String;
    lng: String;
}

export interface IErrorMsg {
    code: number;
    message: String;
}

export interface ILocation {
    loaded: boolean;
    coordinates?: IPoint;
    error?: IErrorMsg;
}

export enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

