const Card = (props) => {
    return(
        <div className="card h-100">
            <a href="#"><img className="card-img-top" src={props.img} alt="" /></a>
            <div className="card-body">
            <h4 className="card-title">
                <a href="#">{props.title}</a>
            </h4>
            <p className="card-text">{props.text}</p>
            </div>
            <div className="card-footer">
            <small className="text-muted">{props.rating}</small>
            </div>
        </div>                
    )
}

export default Card;