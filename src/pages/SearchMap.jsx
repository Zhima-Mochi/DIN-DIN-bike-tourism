import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import { AllShapeDataContext } from "../App";
import BikeMap from "../components/BikeMap";
import Header from "../components/Header";
import RouteMap from "../components/RouteMap";
import city_shape_options from "../constants/city_shape";
import distance from '../assets/icon/distance.svg'

function RouteSelecton({ lane, data,clickHandle }) {
    return (
        <div className={` list-item w-full h-28 ${lane["RouteName"] === data["RouteName"] ? "bg-gray-200" : "bg-white"}`} 
        onClick={()=>clickHandle(data)}>
            <span className="city">{data.City}</span><br />
            <p className="route-name mb-8">{data.RouteName}</p>
            <span className="distance"> 距離 {data.CyclingLength / 1000} km</span>
            <Link to={`/lane_info/${data.RouteName}`}><span className="float-right mr-2 more">查看更多</span></Link>
        </div>
    )
}

export default function SearchMap() {
    const city = useParams()["city"];
    const allShapeData = useContext(AllShapeDataContext);
    const [routes, setRoutes] = useState(allShapeData.slice(0, 100));
    const [lane, setLane] = useState({});
    const history = useHistory();

    function clickHandle(new_lane) {
        setLane(new_lane);
    }
    useEffect(() => {
        city && setRoutes(allShapeData.filter(item => item["City"] === city_shape_options[city]));
    }, [city, allShapeData]);

    useEffect(() => {
        routes.length && setLane(routes[0]);
    }, [routes]);

    return (<>
        <Header bg_color="white" logo_color="color" />
        <div className="bg-gray-100 h-20 lg:h-28"></div>
        <div className="bg-gray-100 view-border">
            <p className="page-title">
                <Link to="/">首頁</Link><span className='mx-1'>/</span>
                <Link to="/search_map">探索地圖</Link>
            </p>
            <div className="search-map-block grid grid-cols-1 sm:grid-cols-12">
                <div className="hidden sm:block col-span-9">
                </div>
                <div className=" col-span-1 mx-1 my-2 sm:col-span-3">
                    <select className='search-map-where w-full ' onChange={e => history.push(`/search_map/${e.target.value}`)}>
                        <option selected={true} disabled={true}> 想去哪裡</option>
                        {
                            Object.entries(city_shape_options).map(item => {
                                return <option key={item[0]} value={item[0]}>{item[1]}</option>
                            })
                        }
                    </select>
                </div>
                <div className="hidden sm:block col-span-9">
                    <div className="relative search-map-map">
                        {lane["Geometry"] && <RouteMap seeToggle={false} geometry={lane["Geometry"]} distance={lane["CyclingLength"]} />}
                    </div>
                </div>
                <div className="search-map-route-list col-span-1 mx-1 sm:col-span-3">
                    {routes && routes.map((item, ind) => {
                        return <RouteSelecton key={ind} lane={lane} data={item} clickHandle={clickHandle} />
                    })}
                </div>
            </div>

        </div>
    </>);
}