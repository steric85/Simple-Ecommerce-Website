// const HEADER = (function(){
//
//   const octopus = {
//     init: function(){
//       view.init();
//     },
//     getCartCount: function(){
//       const cartItemList = DATABASE.getCartItemList();
//       return cartItemList.reduce((accumulator, currentItem) => accumulator + currentItem.quantity,0);
//     }
//   };
//
//   const view = {
//     init: function(){
//       this.countElement =  document.getElementById('cart-items-count');
//       this.render();
//     },
//     render: function(){
//       let cartCount = octopus.getCartCount();
//       this.countElement.textContent = cartCount;
//     }
//   };
//
//   octopus.init();
//
//   return {
//     displayCartCount : ()=>view.render(),
//   }
// })();

const header = document.getElementsByTagName("header")[0];

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
