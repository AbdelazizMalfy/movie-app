import Link from 'next/link';

const Card = (props) => {
    return(
        <div className="card h-100">
            <Link  href={`movies/${props.id}`}>
                <a href="#"><img className="card-img-top" src={props.img} alt="" /></a>
            </Link>
            <div className="card-body">
            <h4 className="card-title">
                <Link  href={`movies/${props.id}`}>
                    <a>{props.title}</a>
                </Link>
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