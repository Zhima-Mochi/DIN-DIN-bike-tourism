import { useMapEvent, useMap } from 'react-leaflet'
import { useEffect } from 'react';

export function SetViewOnClick() {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: true,
        })
    })
    return null;
}

export function SetBound(corners) {
    const map = useMap();
    function getBound(corners, shift = 0.001) {
        return [[corners[0][0] - shift, corners[0][1] - shift], [corners[1][0] - shift, corners[1][1] - shift]];
    }

    useEffect(
        () => {
            if (corners.length) {
                map.fitBounds(getBound(corners));

            }
        },
        [corners]
    )
    return null;
}