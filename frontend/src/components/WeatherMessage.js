import React from 'react';

const WeatherMessage = ({data}) => {
    return (
        <div className='d-flex justify-content-between bg-success text-light'>
            <div>
                <p>Температура</p>
                <p>{data.temp}</p>
            </div>
            <div>
                <p>Описание</p>
                <p>{data.temp}</p>
            </div>
            <div>
                <p>Влажность</p>
                <p>{data.humidity}</p>
            </div>
            <div>
                <p>Давление</p>
                <p>{data.pressure}</p>
            </div>
            <div>
                <p>Дождь</p>
                <p>{data.rain}</p>
            </div>
        </div>
    );
};

export default WeatherMessage;