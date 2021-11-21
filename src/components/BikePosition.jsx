import { Marker, Popup } from 'react-leaflet'

import orange_bike from '../assets/icon/bike_orange.svg';
import bike from '../assets/icon/bike.svg';
import { Icon } from 'leaflet'
import { useState } from 'react';
import { useEffect } from 'react';
import { getStationNearByData } from '../api/getStationData';
import getAvailableData from '../api/getAvailableData';
import DEBUG from '../constants/debug';

const return_bike_icon = new Icon({
    iconUrl: orange_bike,
    iconSize: [32, 32],
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    className: 'leaflet-marker-icon return'
})

const borrow_bike_icon = new Icon({
    iconUrl: bike,
    iconSize: [32, 32],
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    className: 'leaflet-marker-icon borrow'
})

function BikeMarker({ mode, data }) {
    const position = [data["StationPosition"]["PositionLat"], data["StationPosition"]["PositionLon"]];
    const bikeType_posName = data["StationName"]["Zh_tw"].split('_');
    return position[0] && position[1] && (
        <Marker position={position} icon={mode === "borrow" ? borrow_bike_icon : return_bike_icon}>
            <Popup >
                <div className="popup-content">
                    {
                        data["ServiceStatus"] === 1 ?
                            <span className="normal-serv">正常營運</span> :
                            data["ServiceStatus"] === 0 ?
                                <span className="no-serv">停止營問</span> :
                                <span className="no-serv">暫停營運</span>
                    }
                    <span className="type ml-2">{bikeType_posName[0]}</span><br />
                    <span className="title">{bikeType_posName[1]}</span><br />
                    <span className="road">{data["StationAddress"]["Zh_tw"]}</span><br />
                    <span>{mode === "borrow" ? "可租借數量" : "可歸還數量"} {mode === "borrow" ? data["AvailableRentBikes"] : data["AvailableReturnBikes"]}</span> 輛<br />
                </div>
            </Popup>
        </Marker>
    )
}

export default function BikePosition({ location, mode = "borrow" }) {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        getStationNearByData(location[1], location[0], 1000)
            .then(res => getAvailableData(location[1], location[0], res, 1000))
            .then(res => setBikes(res))
    }, [])

    return (
        <>
            {DEBUG && console.log("bikes", bikes)}
            {bikes && bikes.filter(item => (mode === "borrow" ? item["AvailableRentBikes"] > 0 : item["AvailableReturnBikes"] > 0)).map(item => <BikeMarker key={item["StationUID"]} mode={mode} data={item} />)}
        </>
    );
}