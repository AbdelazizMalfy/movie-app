import React from 'react';
import Card from '../components/card';

class MovieList extends React.Component{
    render(){
        return(
            <>
            <div className="row">

                <div className="col-lg-4 col-md-6 mb-4">
                    <Card
                    title='Item One'
                    price='$29.99'
                    text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
                    rating = '&#9733; &#9733; &#9733; &#9733; &#9734;'
                    />
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <Card
                    title='Item Two'
                    price='$24.99'
                    text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.'
                    rating = '&#9733; &#9733; &#9733; &#9733; &#9734;'
                    />
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <Card
                    title='Item Three'
                    price='$24.99'
                    text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
                    rating = '&#9733; &#9733; &#9733; &#9733; &#9734;'
                    />
                </div>

            </div>

            <div className="row">

                <div className="col-lg-4 col-md-6 mb-4">
                    <Card
                    title='Item Four'
                    price='$29.99'
                    text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
                    rating = '&#9733; &#9733; &#9733; &#9733; &#9734;'
                    />
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <Card
                    title='Item Five'
                    price='$24.99'
                    text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.'
                    rating = '&#9733; &#9733; &#9733; &#9733; &#9734;'
                    />
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <Card
                    title='Item Six'
                    price='$24.99'
                    text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
                    rating = '&#9733; &#9733; &#9733; &#9733; &#9734;'
                    />
                </div>

            </div>
            </>
        )
    }
}

export default MovieList;