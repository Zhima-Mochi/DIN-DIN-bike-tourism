import { MapContainer, TileLayer } from 'react-leaflet'
import { useContext } from 'react';
import { useState } from 'react';
import { UserLocation } from '../App';
import { useEffect } from 'react';
import BikePosition from './BikePosition';
import BorrowReturnToggle from './BorrowReturnToggle';



export default function BikeMap() {
    const userLocation = useContext(UserLocation);
    const [bikemap, setBikeMap] = useState(null);
    const [mode, setMode] = useState("borrow");
    const center = [userLocation[1], userLocation[0]];
    function handleClick() {
        if (mode === 'borrow') {
            setMode('return');
        } else {
            setMode('borrow');
        }
    }

    useEffect(() => {
        if (bikemap) {
            bikemap.setView(center);
        }
    }, [bikemap, center]);

    return (
        <>
            <BorrowReturnToggle isToggleOn={mode === 'return'} handleClick={handleClick} />
            <MapContainer tap={false} center={[25.0210905, 121.5353809]} zoom={16} scrollWheelZoom={false} whenCreated={setBikeMap}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <BikePosition mode={mode} location={userLocation} />
            </MapContainer>
        </>
    );
}