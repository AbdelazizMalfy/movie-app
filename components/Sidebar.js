import Modal from './modal';
import MovieCreateForm from './movieCreateForm';
import { createMovie } from '../actions/index';

const sidebar = (props) => {

    let modal = null;

    const onCreateMovie = (movie) => {
        createMovie(movie).then( movies => {
            console.log(movies);
            modal.closeModal()
            return movies
        })

    }

    return (
        <div>
            <Modal ref={e => modal = e} hasSubmit={true}>
                <MovieCreateForm createMovie={onCreateMovie} />
            </Modal>
            <h1 className="my-4">Categories</h1>
            <div className="list-group">
                {
                    props.categories.map(category => (
                        <a key={category.id} href="#" className="list-group-item">{category.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default sidebar;