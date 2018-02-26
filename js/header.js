function Header(props){
  return (
    <header>
      <div>
        <a href="./index.html" id="title" className="header-links">Art&Craft</a>
      </div>
      <div>
        <a href="./cart.html" className="header-links cart-button">
          <span id="cart-items-count">{props.count}</span>
          <i className="material-icons cart-icon">shopping_cart</i>
        </a>
      </div>
    </header>
  );
}
