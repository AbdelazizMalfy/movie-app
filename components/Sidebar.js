const sidebar = (props) => {
    console.log(props)
    return (
        <div>
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