import { useRouter } from 'next/router';

import { getMovieById } from '../../actions'

const Movie = (props) => {
    const router = useRouter()
    return (
        <div className='container'>
            <div className="jumbotron">
                <h1 className="display-4">{props.movie.name}</h1>
                <p className="lead">{props.movie.description}</p>
                <hr className="my-4" />
                <p>{props.movie.rating}</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
            <div className='p-2'>
                <p><h4>Storyline:</h4></p>
                <p className='lead'>{props.movie.storyline}</p>
            </div>

            <style jsx>{`
            .container {
                margin-top:50px;    
            }
            `}
            </style>
        </div>
    )
}

Movie.getInitialProps = async (context) => {
    const id = context.query.id
    const movie = await getMovieById(id);

    return {
        movie
    }
}

export default Movie;