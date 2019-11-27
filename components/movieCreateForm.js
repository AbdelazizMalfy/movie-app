import React from 'react';

class movieCreateForm extends React.Component{
    state = {
        form : {
            name : '',
            description : '',
            rating : '',
            image : '',
            cover : '',
            Storyline : '',
            genre: ''
        }
    }

    onInputChange = (e) =>{
        const newForm = {...this.state.form};
        newForm[e.target.name] = e.target.value;

        this.setState({ form : newForm })
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
    }

    render(){
        const { form } = this.state;
        return(
            <form onSubmit={this.onFormSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    value={form.name}
                    name="name"
                    onChange={this.onInputChange}
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    placeholder="Lord of the Rings" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input 
                    value={form.description}
                    name="description"
                    onChange={this.onInputChange}
                    type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Somewhere in Middle-earth..." />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input 
                    value={form.rating}
                    name="rating"
                    onChange={this.onInputChange}
                    type="number" 
                    max="5" 
                    min="0" 
                    className="form-control" 
                    id="rating" 
                    placeholder="3" />
                    <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                    value={form.image}
                    name="image"
                    onChange={this.onInputChange}
                    type="text" 
                    className="form-control" 
                    id="image" 
                    placeholder="http://....." />
                </div>
                <div className="form-group">
                    <label htmlFor="cover">Cover</label>
                    <input 
                    value={form.cover}
                    name="cover"
                    onChange={this.onInputChange}
                    type="text" 
                    className="form-control" 
                    id="cover" 
                    placeholder="http://......" />
                </div>
                <div className="form-group">
                    <label htmlFor="storyline">Storyline</label>
                    <textarea
                    value={form.storyline} 
                    name="storyline"
                    onChange={this.onInputChange}
                    className="form-control" 
                    id="longDesc" 
                    rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select multiple 
                    value={form.genre}
                    name="genre"
                    onChange={this.onInputChange}
                    className="form-control" 
                    id="genre"
                    >
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default movieCreateForm;