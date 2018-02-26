function addItemToCart(item){
  if(DATABASE.isNotPresentInCart(item.id)){
    DATABASE.addToCartItemList(item);
    alert("Added item to cart! :)");
  }
  else{
    alert("The item is already in cart!");
  }
}

function getItemFromItemList(itemId){
  let item = DATABASE.getItemList().find(function(item){
    return (item.id === itemId);
  });
  return item;
}

function populatePopup(popupDetailsNode,itemSelected){
  let imageNode = document.createElement("img"),
      textNode  =document.createElement("div"),
      htmlText =`
        <div class="popup-item-name">${itemSelected.name}</div>
        <div class="popup-item-seller">${itemSelected.seller}</div>
        <div>
          <ul class="popup-item-description">`;

  popupDetailsNode.setAttribute("data-popup-item-id",`${itemSelected.id}`);
  imageNode.className ="popup-item-image";
  imageNode.setAttribute("src",itemSelected.image);
  imageNode.setAttribute("alt",itemSelected.name);
  textNode.className ="popup-item-text";
  itemSelected.description.forEach((element) => {
  let listNode = document.createElement("li");
    listNode.textContent = element;
    htmlText += listNode.outerHTML;
  })
  htmlText +=`</ul>
    </div>
    <div class="popup-item-price">Price: Rs. ${itemSelected.price}</div>`;
  textNode.innerHTML = htmlText;
  popupDetailsNode.appendChild(imageNode);
  popupDetailsNode.appendChild(textNode);
}

function openPopup(event,itemId){
  let itemSelected = getItemFromItemList(itemId),
      popupDetailsNode = document.getElementById("popup-item-details");

  populatePopup(popupDetailsNode,itemSelected);
  window.location.href = `#popupbox`;
}

function MenuTitle(props){
  return <div id="menu-title">{props.categoryId.replace("-"," ")}</div>;
}

function QuickAddButton(props){
  function handleQuickAdd(event){
    addItemToCart({
      "id":props.itemId,
      "quantity":1
    });
    event.stopPropagation();
    props.updateHeaderCartCount();
  }
  return <i className="material-icons quick-add" onClick={handleQuickAdd}>add_shopping_cart</i>;
}

function Item(props){
  function handleClick(event){
    openPopup(event,props.item.id);
  }
  return (
    <div className="item" onClick={handleClick}>
      <img className="item-image" src={props.item.image} alt="Item image"/>
      <div className="item-details">
        <div className="item-name ellipsis">{props.item.name}</div>
        <div className="item-seller ellipsis">{props.item.seller}</div>
        <div className="item-price">Rs. {props.item.price}</div>
      </div>
      <QuickAddButton updateHeaderCartCount={props.updateHeaderCartCount} itemId={props.item.id}/>
    </div>
  );
}

function getItems(){
  let myPromise = new Promise((resolve) => {
    setTimeout(function(){
      resolve(DATABASE.getItemList());
    }, Math.random()*10000);
  });
  return myPromise;
}

class ItemList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentStatus: "Loading items ...",
    };
  }

  componentDidMount(){
    getItems().then((items) => {
      this.setState({
        currentStatus: "successful",
        items: items,
      });
    });
  }

  render(){
    return(
      <div id="item-list">
        {
          this.state.currentStatus === "successful" ?
            this.state.items.map((item) => {
              if(item.category == this.props.categoryId){
                return <Item key={item.id} item={item} updateHeaderCartCount={this.props.updateHeaderCartCount}/>
              }
            })
          :
          <div>{this.state.currentStatus}</div>
        }
      </div>
    );
  }
}

function ItemsMenu(props){
  const category = window.location.search,
      categoryId = category.slice(category.indexOf("=")+1);

  return(
    <React.Fragment>
      <MenuTitle categoryId={categoryId}/>
      <ItemList categoryId={categoryId} updateHeaderCartCount={props.updateHeaderCartCount}/>
    </React.Fragment>
  );
}

function CloseButton(props){
  return <a className="close" href="#!" onClick={props.closePopup}>&times;</a> ;
}

function AddToCartButton(props){
  function handleAddToCart(){
    let itemId = document.getElementById("popup-item-details").dataset.popupItemId;
    addItemToCart({
      "id":itemId,
      "quantity":1
    });
    props.updateHeaderCartCount();
    window.location.href = `#!`;
    props.closePopup();
  }
  return <button id="add-to-cart-button" type="button" onClick={handleAddToCart}>Add To Cart</button>;
}

function PopupBox(props){
  function closePopup(){
    let popupDetailsDiv = document.getElementById("popup-item-details");
    popupDetailsDiv.removeAttribute("data-popup-item-id");
    while (popupDetailsDiv.hasChildNodes()) {
      popupDetailsDiv.removeChild(popupDetailsDiv.firstChild);
    }
  }

  return (
    <div id="popupbox" className="layer">
      <div className="popup">
        <CloseButton closePopup={closePopup}/>
        <div id="popup-item-details"></div>
        <AddToCartButton updateHeaderCartCount={props.updateHeaderCartCount} closePopup={closePopup}/>
      </div>
    </div>
  );
}

class ItemsPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cartCount:DATABASE.getCartCount(),
    }
    this.updateHeaderCartCount = this.updateHeaderCartCount.bind(this);
  }
  updateHeaderCartCount(){
    this.setState({
      cartCount:DATABASE.getCartCount(),
    });
  }
  render(){
    return(
      <React.Fragment>
        <Header count={this.state.cartCount}/>
        <ItemsMenu updateHeaderCartCount={this.updateHeaderCartCount}/>
        <PopupBox updateHeaderCartCount={this.updateHeaderCartCount}/>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <ItemsPage/>,
  document.getElementById("root")
);
