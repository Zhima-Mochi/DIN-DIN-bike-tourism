import React from 'react';
import { renderRoutes } from 'react-router-config'
import routes from './router';
import { useState } from 'react';
import { getAllShapeData } from './api/getShapData';
import { createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { positionDistance } from './api/positionFilter';
import Footer from './components/Footer';


export const AllShapeDataContext = createContext([]);
export const UserLocation = createContext([121.5410178, 25.0208745]);

export default function App() {
  const [position, setPosition] = useState(useContext(UserLocation));
  const [allShapeData, setAllShapeData] = useState(useContext(AllShapeDataContext));

  useEffect(() => {
    getAllShapeData().then(res => setAllShapeData(res));
  }, []);

  // get current user position
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosition([position.coords.longitude, position.coords.latitude]);
        },
        function (e) {
          const msg = e.code;
          const dd = e.message;
          console.error(msg)
          console.error(dd)
        }
      )
    }
  }, []);

  // sort shape data
  useEffect(() => {
    setAllShapeData(allShapeData.sort(function (a, b) {
      return positionDistance(a["Geometry"][0], position) - positionDistance(b["Geometry"][0], position);
    }));
  }, [position, allShapeData]);


  return (
    // min-h-screen: min-height:100vh
    <UserLocation.Provider value={position}>
      <AllShapeDataContext.Provider value={allShapeData}>
        <div className='min-h-screen' >
          {renderRoutes(routes)}
        </div>
        <Footer />
      </AllShapeDataContext.Provider>
    </UserLocation.Provider>
  )
}