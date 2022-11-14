function Header(name)  {
    console.log(name.name);
    return (
        <div className="todo-list">
            <p>my name is {name.name}</p>
        
        </div>
    )
}

export default Header;