import { MapContainer, TileLayer, Marker, Popup, useMap, click, Polyline } from 'react-leaflet'

import map from '../assets/icon/map.svg';
import { Icon } from 'leaflet'
import { useContext } from 'react';
import { UserLocation } from '../App';
import { useEffect, useState } from 'react';
import BikePosition from './BikePosition';
import BorrowReturnToggle from './BorrowReturnToggle';

const map_icon = new Icon({
    iconUrl: map,
    iconSize: [32, 32],
    className: 'leaflet-marker-icon route'
})


function getCorners(geometry) {
    let top = geometry[0][0], left = geometry[0][1];
    let bottom = top, right = left;
    for (let geo of geometry) {
        if (geo[0] > top) {
            top = geo[0];
        } else if (geo[0] < bottom) {
            bottom = geo[0];
        }
        if (geo[1] < left) {
            left = geo[1];
        } else if (geo[1] > right) {
            right = geo[1];
        }
    }
    return [[bottom, left], [top, right]];
}

function getCenter(corners) {
    return [(corners[0][0] + corners[1][0]) / 2, (corners[0][1] + corners[1][1]) / 2];
}

function getDiameter(corners) {
    return Math.pow(Math.pow(corners[0][0] - corners[0][1], 2) + Math.pow(corners[1][0] - corners[1][1], 2), 0.5)
}

const routeOptions = { color: '#51AB5B' }

export default function RouteMap({ geometry, distance, seeToggle = true }) {
    const userLocation = useContext(UserLocation);
    const [map, setMap] = useState(null);
    const [mode, setMode] = useState("borrow");

    // api is latitude first then longitude
    geometry = geometry.map(item => [item[1], item[0]]);
    let geometry_group = [];
    let prev＿start = 0;
    for (let i = 1; i < geometry.length; ++i) {
        if (!geometry[i][0] || !geometry[i][1]) {
            geometry_group.push(geometry.slice(prev＿start, i));
            ++i;
            prev＿start = i + 1;
        }
    }
    geometry_group.push(geometry.slice(prev＿start, geometry.length));



    const corners = getCorners(geometry);
    // center is center of geometry center and start position
    // const center = getCenter([getCenter(corners), geometry[0]]);

    // use start point as center
    const center = geometry[0];

    // const diameter = getDiameter(corners);
    const zoom = (
        distance <= 500 ? 16 :
            distance <= 3000 ? 15 :
                14
    )
    useEffect(() => {
        if (map) {
            map.setView(center, zoom);
        }
    }, [map, center]);


    function handleClick() {
        if (mode === 'borrow') {
            setMode('return');
        } else {
            setMode('borrow');
        }
    }

    return (
        <>
            {seeToggle && <BorrowReturnToggle isToggleOn={mode === 'return'} handleClick={handleClick} />}
            <MapContainer tap={false} center={[25.0210905, 121.5353809]} zoom={15} scrollWheelZoom={false} whenCreated={setMap}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {geometry_group.map((item, ind) => {
                    return (
                        <Polyline key={ind} pathOptions={routeOptions} positions={item} />
                    )
                })}
                {seeToggle && <BikePosition mode={mode} location={geometry[0]} />}
                <Marker position={geometry[0]} icon={map_icon}>
                    <Popup>
                        起點
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}