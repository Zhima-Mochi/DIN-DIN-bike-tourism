import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import BikeMap from "../components/BikeMap";



export default function NearBy() {
    const route_name = useParams()['RouteName'];

    return (<>
        <Header bg_color="white" logo_color="color" />
        <div className="h-20 lg:h-28"></div>
        <div className="view-border">
            <p className="page-title">
                <Link to="/">首頁</Link><span className='mx-1'>/</span>
                <Link to="/nearby">尋找單車</Link><span className='mx-1'>/</span>
                尋找附近的自行車
            </p>
            <div className="relative near-bike-map mt-12 mx-auto mb-28">
                {<BikeMap />}
            </div>
        </div>
    </>);
}