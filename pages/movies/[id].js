import { useRouter } from 'next/router';

import { getMovieById } from '../../actions'

const Movie = (props) => {
    const router = useRouter()
    const id = router.query.id

    return (
        <div className='container'>
            <h1>Movie with id: {id} </h1>
            <div className="jumbotron">
                <h1 className="display-4">{props.movie.name}</h1>
                <p className="lead">{props.movie.description}</p>
                <hr className="my-4" />
                <p>{props.movie.rating}</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
            <p>
                Some description about the movie
            </p>
        </div>
    )
}

Movie.getInitialProps = async () => {
    const movie = await getMovieById('2');

    return {
        movie
    }
}

export default Movie;