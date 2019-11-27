import React from 'react'

import Sidebar from '../components/Sidebar';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies, getCategories } from '../actions'

class Home extends React.Component {

  static async getInitialProps(){
    const movies = await getMovies()
    const images = movies.map( movie => ({ id:`image-${movie.id}`, imageUrl: movie.cover }))
    const categories = await getCategories();

    return {
      movies,
      images,
      categories
    }
  }

  render(){
    const { movies , images , categories } = this.props;
    return (
      <div>
        <div className='home-page'>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Sidebar categories = { categories } />        
              </div>
              <div className="col-lg-9">
                <Carousel images = { images } />
                <MovieList movies={ movies }  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
}

export default Home
