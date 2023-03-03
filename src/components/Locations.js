import React from "react";
import data from "../data";
import "./Img.css"
function Locations(props){
    console.log(data);
    return(
        <>
        <div className="location">
            <div className="card">
                <img src={props.data.imageUrl} alt="" className="photo" ></img>
            </div>
            <div className="info">
                <p>📌 {props.data.location}</p>
                <a href={props.data.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="title">{props.data.title}</h1>
            <h4 className="date">{props.data.startDate} -  {  props.data.endDate}</h4>
            <p className="des">{props.data.description}</p>

        </div>
        </>
    )
}


export default Locations;