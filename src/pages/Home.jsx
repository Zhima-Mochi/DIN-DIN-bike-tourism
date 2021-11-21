import Banner from "../components/Banner";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Inspiration from "../components/Inspiration";
import NearBike from "../components/NearBike";



export default function Home() {

    return (<>
        <Header />
        <Banner />
        <div className="view-border">
            <Introduction />
        </div>
        <div className="bg-gray-100 view-border">
            <Inspiration />
        </div>
        <div className="view-border">
            <NearBike />
        </div>
            {/* <Activity /> */}
    </>);
}