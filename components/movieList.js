import React from 'react';
import Card from '../components/card';

class MovieList extends React.Component{
    render(){
        const { movies } = this.props

        return(
            <div className="row">
                
                { movies.map( movie => (
                        <div className="col-lg-4 col-md-6 mb-4">
                        <Card
                        title={movie.name}
                        text= {movie.description}
                        rating = {movie.rating}
                        img = {movie.image}
                        />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default MovieList;