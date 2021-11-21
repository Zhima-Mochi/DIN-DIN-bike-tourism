import DEBUG from "../constants/debug"

export default function setMarker(filterData){
    filterData.forEach((item)=>{
        DEBUG && console.log(item.StationPosition.PositionLon,item.StataionPosition.PositionLat);
        
    })
}