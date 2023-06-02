import "./Card.css";

//import starImg from"../../public/image/star.png";

export default function Card(props){
    // console.log(props)
    return(
        
        <div className="card">
            <img src={props.link} className="card-img" alt="loading..."></img>
            <div className="card-status">
                <img src="./image/star.png" width="15" alt="loading..."></img>
                <span>{props.rate}</span>
                <span>({props.count})</span>
                <span>USA</span>
            </div>
            <p >{props.description}</p>
            <p><strong style={{color:"black"}}>From ${props.price}</strong>/Person</p>   
        </div>
    )
}