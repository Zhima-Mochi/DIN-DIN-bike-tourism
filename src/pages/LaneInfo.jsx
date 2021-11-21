import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { AllShapeDataContext } from "../App";
import { useState, useEffect } from "react";
import DEBUG from "../constants/debug";
import RouteMap from "../components/RouteMap";



export default function LaneInfo() {
    const route_name = useParams()['RouteName'];
    const allShapeData = useContext(AllShapeDataContext);
    const [lane, setLane] = useState({});
    DEBUG && console.log(lane);
    useEffect(() => {
        if (allShapeData.length) {
            setLane(allShapeData.find(item => item["RouteName"] === route_name));
        }
    }, [allShapeData]);

    return (<>
        <Header bg_color="white" logo_color="color" />
        <div className="h-20 lg:h-28"></div>
        <div className="view-border">
            <p className="page-title">
                <Link to="/">首頁</Link><span className='mx-1'>/</span>
                <Link to="/search_map">探索地圖</Link><span className='mx-1'>/</span>
                路線介紹
            </p>
            <p className="lane-info-title mt-3 mb-3">
                {lane["RouteName"]}
            </p>
            <p className="lane-info-subtitle mb-3">
                城市：{lane["City"]} <span className="mr-3"></span>
                隸屬於：{lane["AuthorityName"]}
            </p>
            <p className="lane-info-distance mt-8 mb-3">
                總長度：{lane["CyclingLength"] ? lane["CyclingLength"] / 1000 : '?'} km
            </p>
            <section className="lane-info-section mt-28 mb-5">路線規劃</section>
            <div className="relative lane-info-map">
                {lane["Geometry"] && <RouteMap geometry={lane["Geometry"]} distance={lane["CyclingLength"]} />}
            </div>
        </div>
    </>);
}