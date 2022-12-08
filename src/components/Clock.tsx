import {useEffect, useState} from 'react';

function Clock() {
    const [date, setDate] = useState<Date>(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <span className="clock-container">
      {date.toLocaleTimeString()}
    </span>
    );
}

export default Clock;