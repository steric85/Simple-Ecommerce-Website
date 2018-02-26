function Category(props){

  function handleClick(){
    window.location.href = `itemlist.html?category=${props.category.id}`
  }

  return (
    <div className="category" onClick={handleClick}>
      <img className="category-image" src={props.category.image} alt={props.category.name}/>
      <div className="category-name">{props.category.name}</div>
    </div>
  );
}

function CategoryList(){
  return(
    <div id="category-list">
      {DATABASE.getCategoryList().map((category) => <Category key={category.id} category={category}/>)}
    </div>
  )
}

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Header count={DATABASE.getCartCount()}/>
        <CategoryList />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
