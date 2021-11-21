import { useContext } from 'react';
import { AllShapeDataContext } from '../App';
import IntroTitle from './IntroTitle';
import index_inspiration_1 from '../assets/img/index_inspiration_1.jpg';
import index_inspiration_2 from '../assets/img/index_inspiration_2.jpg';
import index_inspiration_3 from '../assets/img/index_inspiration_3.jpg';
import index_inspiration_4 from '../assets/img/index_inspiration_4.jpg';
import index_inspiration_5 from '../assets/img/index_inspiration_5.jpg';
import index_inspiration_6 from '../assets/img/index_inspiration_6.jpg';
import distance from '../assets/icon/distance.svg'
import { Link } from 'react-router-dom';
import DEBUG from '../constants/debug';

const inspiration_image=[
    index_inspiration_1,
    index_inspiration_2,
    index_inspiration_3,
    index_inspiration_4,
    index_inspiration_5,
    index_inspiration_6,
]
function Route({ data,ind }) {
    DEBUG && console.log(data);
    return (
        <Link to={`/lane_info/${data.RouteName}`}>
        <div className=" recommend-route-box">
            <div className="grid grid-cols-2 ">
                <div className="col-span-1 mr-4 ">
                    <img className="recommend-route-img" src={inspiration_image[ind]}/>
                </div>
                <div className="col-span-1 recommend-route-content ">
                    <p className="city mb-1">{data.City}</p>
                    <p className="route-name mb-1">{data.RouteName}</p>
                    <img src={distance} className="distance-icon mr-1"/> 
                    <span className="distance">{data.CyclingLength/1000}km</span>
                </div>
            </div>
        </div>
        </Link>
    )
}
export default function Inspiration() {
    const allShapeData = useContext(AllShapeDataContext);
    return (
        <div className="w-full pt-12 pb-12 mt-24 mb-24">
            <IntroTitle title_1="Looking for Inspiration" title_2="推薦單車路線" />
            <div className="flex  lg:justify-between items-center flex-col lg:flex-row">
                {
                    allShapeData.slice(0, 3).map((item,ind) => {
                        return <Route key={ind} ind={ind} data={item} />
                    })
                }
            </div>
            <div className="flex  lg:justify-between items-center flex-col lg:flex-row">
                {
                    allShapeData.slice(3, 6).map((item,ind) => {
                        return <Route key={ind} ind={ind+3} data={item} />
                    })
                }
            </div>
        </div>
    )
}