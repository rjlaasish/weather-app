import {useEffect, useState} from "react";
import {IErrorMsg, ILocation} from "../types/IWeather";


const useGeoLocation = () => {
    const [location, setLocation] = useState<ILocation>({
        loaded: false,
        coordinates: {lat: "", lng: ""}
    });


    const onSuccess = (latitude: number, longitude: number) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: latitude.toString(),
                lng: longitude.toString(),
            },
        });
    };

    const onError = (error: IErrorMsg) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(
            (location: GeolocationPosition) =>
                onSuccess(location.coords.latitude, location.coords.longitude),
            onError
        );
    }, []);

    return location;
};

export default useGeoLocation;
