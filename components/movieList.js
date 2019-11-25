import React from 'react';
import Card from '../components/card';

class MovieList extends React.Component{

    shortenText = (text) => {
        if(text && text.length > 180){
            return text.substr(0, 180) + '...'
        }else {
            return text
        }
    }

    render(){
        const { movies } = this.props

        return(
            <div className="row">
                { 
                    movies.map( movie => (
                        <div key={movies.id} className="col-lg-4 col-md-6 mb-4">
                            <Card
                                title={movie.name}
                                text= {this.shortenText(movie.description)}
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