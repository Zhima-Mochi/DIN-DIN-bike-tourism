import { useContext } from "react";
import { AllShapeDataContext } from "../App";
import BikeMap from "./BikeMap";
import IntroTitle from "./IntroTitle"

export default function NearBike() {
    const allShapeData = useContext(AllShapeDataContext);

    return (
        <div className="w-full bg-white mt-24 mb-24">
            <IntroTitle title_1="Looking for ubike" title_2="尋找附近1公里內的Ubike" />
            <div className="relative near-bike-map mt-3 mx-auto mb-28">
                <BikeMap />
            </div>
        </div>
    )
}