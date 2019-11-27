import React from 'react'

import Sidebar from '../components/Sidebar';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies } from '../actions'

class Home extends React.Component {

  static async getInitialProps(){
    const movies = await getMovies()
    const images = movies.map( movie => ({ id:`image-${movie.id}`, image: movie.image }))

    return {
      movies,
      images
    }
  }


  // state = {
  //   movies: []
  // }

  // componentDidMount(){
  //   getMovies().then(movies => this.setState({movies}))
  // }

  render(){
    console.log(this.props.images)
    return (
      <div>
        <div className='home-page'>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Sidebar/>        
              </div>
              <div className="col-lg-9">
                <Carousel/>
                <MovieList movies={this.props.movies || []}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
}

export default Home
