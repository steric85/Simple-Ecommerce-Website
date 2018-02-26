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

function getCategories(){
  let myPromise = new Promise((resolve) => {
    setTimeout(function(){
      resolve(DATABASE.getCategoryList());
    }, Math.random()*10000);
  });
  return myPromise;
}

class CategoryList extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      categories : [],
      currentStatus : "Loading Categories...",
    };
  }

  componentDidMount(){
    getCategories().then((categories) => {
      this.setState({
        currentStatus: "successful",
        categories: categories,
      });
    });
  }

  render(){
    return(
      <div id="category-list">
        {
          this.state.currentStatus === "successful" ?
            this.state.categories.map((category) => <Category key={category.id} category={category}/>)
          :
            <div>{this.state.currentStatus}</div>
        }
      </div>
    );
  }
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
