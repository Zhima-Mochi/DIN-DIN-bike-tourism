import map from "../assets/icon/map.svg"
import map_pin from "../assets/icon/map-pin.svg"
import { AllShapeDataContext } from "../App";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import city_shape_options from "../constants/city_shape";

export default function Search() {
    const allShapeData = useContext(AllShapeDataContext);
    const history = useHistory();
    return (<div className="search container  z-30 mx-auto my-28 lg:my-40">
        <p className="select-none">體驗自由與速度的旅程</p>
        <div className="grid grid-cols-12 md:grid-cols-12 md:gap-4 " >
            <div className="relative hidden md:block md:col-span-4 ">
                <img className="select-img" src={map} />
                <select className='search  w-full  focus:outline-none' onChange={e => history.push(`/lane_info/${e.target.value}`)} >
                    <option selected={true} disabled={true}>找路線</option>
                    {
                        allShapeData.slice(20, 40).map((item,ind) => {
                            return <option key={ind} value={item["RouteName"]}>{item["RouteName"]}</option>
                        })
                    }
                </select>
            </div>
            <div className="relative col-span-11 md:col-span-5">
                <img className="select-img" src={map_pin} />
                <select className='search  w-full  focus:outline-none' onChange={e => history.push(`/search_map/${e.target.value}`)}>
                    <option selected={true} disabled={true}> 想去哪裡</option>
                    {
                        Object.entries(city_shape_options).map(item => {
                            return <option key={item[0]} value={item[0]}>{item[1]}</option>
                        })
                    }
                </select>
            </div>
            <div className="hidden md:block md:col-span-3">
                <Link to={allShapeData.length ? `/lane_info/${allShapeData.length && allShapeData[Math.floor(Math.random() * allShapeData.length)]["RouteName"]}` : '/'}>
                    <button>
                        尋找旅程
                    </button>
                </Link>
            </div>
        </div>
    </div>)
}