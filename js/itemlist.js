// const ITEMLIST = (function(){
//
//   const octopus = {
//     init: function(){
//       view.init();
//     },
//     getItems: function(){
//       return DATABASE.getItemList();
//     },
//     getItemFromItemList: function(itemId){
//       let item = this.getItems().find(function(item){
//         return (item.id === itemId);
//       });
//       return item;
//     },
//     addItemToCart: function(item){
//       if(DATABASE.isNotPresentInCart(item.id)){
//         DATABASE.addToCartItemList(item);
//       }
//     },
//     updateHeaderCartCount: function(){
//       HEADER.displayCartCount();
//     }
//   };
//
//   const view = (function(){
//
//     function getItemInnerHTML(item){
//       return `
//         <img class="item-image" src=${item.image} alt="Item image">
//         <div class="item-details">
//           <div class="item-name ellipsis">${item.name}</div>
//           <div class="item-seller ellipsis">${item.seller}</div>
//           <div class="item-price">Rs. ${item.price}</div>
//         </div>
//       `;
//     }
//
//     function populatePopup(popupDetailsNode,itemSelected){
//       let imageNode = document.createElement("img"),
//           textNode  =document.createElement("div");
//           htmlText =`
//             <div class="popup-item-name">${itemSelected.name}</div>
//             <div class="popup-item-seller">${itemSelected.seller}</div>
//             <div>
//               <ul class="popup-item-description">`;
//
//       popupDetailsNode.setAttribute("data-popup-item-id",`${itemSelected.id}`);
//       imageNode.className ="popup-item-image";
//       imageNode.setAttribute("src",itemSelected.image);
//       imageNode.setAttribute("alt",itemSelected.name);
//       textNode.className ="popup-item-text";
//       itemSelected.description.forEach((element) => {
//         let listNode = document.createElement("li");
//         listNode.textContent = element;
//         htmlText += listNode.outerHTML;
//       })
//       htmlText +=`</ul>
//         </div>
//         <div class="popup-item-price">Price: Rs. ${itemSelected.price}</div>`;
//       textNode.innerHTML = htmlText;
//       popupDetailsNode.appendChild(imageNode);
//       popupDetailsNode.appendChild(textNode);
//     }
//
//     function openPopup(popupDetailsNode,event){
//       let itemId = event.target.closest('.item').dataset.id,
//           itemSelected = octopus.getItemFromItemList(itemId);
//
//       populatePopup(popupDetailsNode,itemSelected);
//
//       window.location.href = `#popupbox`;
//     }
//
//     function closePopup(popupDetailsDiv){
//       popupDetailsDiv.removeAttribute("data-popup-item-id");
//       while (popupDetailsDiv.hasChildNodes()) {
//           popupDetailsDiv.removeChild(popupDetailsDiv.firstChild);
//       }
//     }
//
//     return {
//       init: function(){
//         this.itemListElem = document.getElementById("item-list");
//         this.titleElem = document.getElementById("menu-title");
//         this.popupDetailsElem = document.getElementById("popup-item-details");
//         this.closeButton = document.getElementsByClassName("close")[0];
//         this.addToCartButton = document.getElementById("add-to-cart-button");
//         this.render();
//       },
//       render: function(){
//         const items = octopus.getItems();
//         let category = window.location.search,
//             categoryId = category.slice(category.indexOf('=')+1),
//             fragment = document.createDocumentFragment(),
//             itemNode,quickAddButton;
//
//         this.titleElem.textContent = categoryId.replace('-',' ');
//
//         items.forEach((item) => {
//           if(item.category == categoryId){
//             itemNode = document.createElement("div");
//             itemNode.className="item";
//             itemNode.setAttribute("data-id",`${item.id}`);
//             itemNode.addEventListener("click", (event)=>openPopup(this.popupDetailsElem,event));
//             itemNode.innerHTML = getItemInnerHTML(item);
//             quickAddButton = document.createElement("i");
//             quickAddButton.className = "material-icons";
//             quickAddButton.classList.add("quick-add");
//             quickAddButton.textContent = "add_shopping_cart";
//             quickAddButton.addEventListener("click", (event)=>{
//               let itemId = event.target.closest('.item').dataset.id;
//               octopus.addItemToCart({
//                     "id":itemId,
//                     "quantity":1
//               });
//               octopus.updateHeaderCartCount();
//               event.stopPropagation();
//               alert('Added item to cart! :)');
//             });
//             itemNode.appendChild(quickAddButton);
//             fragment.appendChild(itemNode);
//           }
//         });
//         this.itemListElem.appendChild(fragment);
//
//         this.closeButton.addEventListener('click',()=>closePopup(this.popupDetailsElem));
//         this.addToCartButton.addEventListener('click',() => {
//           let itemId = this.popupDetailsElem.dataset.popupItemId;
//           octopus.addItemToCart({
//                 "id":itemId,
//                 "quantity":1
//           });
//           octopus.updateHeaderCartCount();
//           window.location.href = `#!`;
//           closePopup(this.popupDetailsElem);
//         });
//       }
//     };
//   })();
//
//   octopus.init();
// })();

function addItemToCart(item){
  if(DATABASE.isNotPresentInCart(item.id)){
    DATABASE.addToCartItemList(item);
  }
}

function getItemFromItemList(itemId){
  let item = DATABASE.getItemList().find(function(item){
    return (item.id === itemId);
  });
  return item;
}

function closePopup(){
  let popupDetailsDiv = document.getElementById("popup-item-details");
  popupDetailsDiv.removeAttribute("data-popup-item-id");
  while (popupDetailsDiv.hasChildNodes()) {
    popupDetailsDiv.removeChild(popupDetailsDiv.firstChild);
  }
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

function openPopup(event){
  let itemId = event.target.closest('.item').dataset.id,
      itemSelected = getItemFromItemList(itemId),
      popupDetailsNode = document.getElementById("popup-item-details");

  populatePopup(popupDetailsNode,itemSelected);
  window.location.href = `#popupbox`;
}

function MenuTitle(props){
  return <div id="menu-title">{props.categoryId.replace('-',' ')}</div>;
}

class QuickAddButton extends React.Component{
  constructor(props){
    super(props);
    this.handleQuickAdd = this.handleQuickAdd.bind(this);
  }
  handleQuickAdd(event){
    let itemId = event.target.closest('.item').dataset.id;
    addItemToCart({
      "id":itemId,
      "quantity":1
    });
    event.stopPropagation();
    alert('Added item to cart! :)');
    this.props.updateHeaderCartCount();
  }
  componentDidMount(){
    ReactDOM.findDOMNode(this).addEventListener("click",this.handleQuickAdd);
  }
  render(){
    return <i className="material-icons quick-add">add_shopping_cart</i>;
  }
}

class Item extends React.Component{
  componentDidMount(){
    ReactDOM.findDOMNode(this).addEventListener('click',openPopup);
  }
  render(){
    return (
      <div className="item" data-id={this.props.item.id}>
        <img className="item-image" src={this.props.item.image} alt="Item image"/>
        <div className="item-details">
          <div className="item-name ellipsis">{this.props.item.name}</div>
          <div className="item-seller ellipsis">{this.props.item.seller}</div>
          <div className="item-price">Rs. {this.props.item.price}</div>
        </div>
        <QuickAddButton updateHeaderCartCount={this.props.updateHeaderCartCount}/>
      </div>
    );
  }
}

function ItemList(props){
  return(
    <div id="item-list">
      {DATABASE.getItemList().map((item) => {
        if(item.category == props.categoryId)
        return <Item key={item.id} item={item} updateHeaderCartCount={props.updateHeaderCartCount}/>})}
    </div>
  )
}

function ItemsMenu(props){
  let category = window.location.search,
      categoryId = category.slice(category.indexOf('=')+1);

  return(
    <React.Fragment>
      <MenuTitle categoryId={categoryId}/>
      <ItemList categoryId={categoryId} updateHeaderCartCount={props.updateHeaderCartCount}/>
    </React.Fragment>
  );
}

class CloseButton extends React.Component{
  componentDidMount(){
    ReactDOM.findDOMNode(this).addEventListener('click',closePopup);
  }
  render(){
    return <a className="close" href="#!">&times;</a> ;
  }
}

class AddToCartButton extends React.Component{
  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(){
    let itemId = ReactDOM.findDOMNode(this).previousSibling.dataset.popupItemId;
    addItemToCart({
      "id":itemId,
      "quantity":1
    });
    this.props.updateHeaderCartCount();
    window.location.href = `#!`;
    closePopup();
  }
  componentDidMount(){
    ReactDOM.findDOMNode(this).addEventListener('click',this.handleAddToCart);
  }
  render(){
    return <button id="add-to-cart-button" type="button">Add To Cart</button>;
  }
}

function PopupItem(){
  return <div id="popup-item-details"></div>;
}

function PopupBox(props){
  return (
    <div id="popupbox" className="layer">
      <div className="popup">
        <CloseButton />
        <PopupItem/>
        <AddToCartButton updateHeaderCartCount={props.updateHeaderCartCount}/>
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
