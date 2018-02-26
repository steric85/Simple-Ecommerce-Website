function getItemFromItemList(itemId){
  let item = DATABASE.getItemList().find(function(item){
    return (item.id === itemId);
  });
  return item;
}

class ItemRow extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      price : (this.props.quantity * this.props.item.price)
    };
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleItemDelete(){
    DATABASE.removeFromCartItemList(this.props.item.id);
    this.props.updateCartDetails();
  }

  handleQuantityChange(event){
    let element = event.target, cartItem = getItemFromItemList(this.props.item.id);
    element.value = element.value <= 0 ? 1 : element.value;
    if(element.value > cartItem.availableQuantity){
      element.value = cartItem.availableQuantity;
      alert(cartItem.availableQuantity+" is the maximum available quantity for this item!");
    }
    else{
      this.setState({
        price : (element.value * cartItem.price)
      });
      DATABASE.setCartItemQuantity(cartItem.id,parseInt(element.value));
      this.props.updateCartDetails();
    }
  }

  render(){
    return (
      <tr>
        <td>
          <div className="cart-item-details">
            <i className="material-icons delete" onClick={this.handleItemDelete}>cancel</i>
            <img className="cart-item-image" src={this.props.item.image}/>
            <div className="cart-item-description">
              <div className="cart-item-name">{this.props.item.name}</div>
              <div className="cart-item-detail">
                {this.props.item.number >1 ? `Pack of ${this.props.item.number}` : `One item`}
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <input className="cart-item-qty" type="number" size="1" value={this.props.quantity} min="1" onChange={this.handleQuantityChange}/>
          </div>
        </td>
        <td>
          <div className="cart-item-price price-column">{this.state.price}</div>
        </td>
      </tr>
    );
  }
}

function TotalRow(props){
  return (
    <tr>
      <td colSpan="2">TOTAL</td>
      <td><span id="total-amount" className="price-column">{props.total}</span></td>
    </tr>
  );
}

class CartTable extends React.Component{

  constructor(props){
    super(props);
    this.state = new (function(){
      this.cartItems= DATABASE.getCartItemList();
      this.cartTotal= this.cartItems.reduce((accumulator, currentItem)=>
        accumulator + (currentItem.quantity * getItemFromItemList(currentItem.id).price),0);
    })();
    this.updateCartDetails = this.updateCartDetails.bind(this);
  }

  updateCartDetails(){
    this.props.updateHeaderCartCount();
    this.setState ({
      cartItems: DATABASE.getCartItemList(),
    }, function(){
      this.setState({
        cartTotal: this.state.cartItems.reduce((accumulator, currentItem)=>
          accumulator + (currentItem.quantity * getItemFromItemList(currentItem.id).price),0),
      })
    });
  }

  render(){
    return (
      <table id="cart-table">
        <thead>
          <tr>
            <th>ITEMS</th>
            <th>QTY.</th>
            <th className="price-column">PRICE (INR)</th>
          </tr>
        </thead>
        <tbody id="cart-table-body">
          {this.state.cartItems.map((cItem)=>
            <ItemRow key={cItem.id} item={getItemFromItemList(cItem.id)}
              quantity={cItem.quantity} updateCartDetails={this.updateCartDetails}/>)}
          <TotalRow total={this.state.cartTotal}/>
        </tbody>
      </table>
    );
  }
}

function CartContainer(props){
  return (
    <div className="cart-container">
      <div className="cart">
        <div id="my-cart">
          My Cart
        </div>
        <CartTable updateHeaderCartCount={props.updateHeaderCartCount}/>
        <div>
          <button className="order-button" type="button">Place Order</button>
        </div>
      </div>
    </div>
  );
}

class CartPage extends React.Component{
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
    return (
      <React.Fragment>
        <Header count={this.state.cartCount}/>
        <CartContainer updateHeaderCartCount={this.updateHeaderCartCount}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <CartPage/>,
  document.getElementById("root")
);
