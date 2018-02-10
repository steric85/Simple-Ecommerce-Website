const HEADER = (function(){

  const model = {
    init: function(){
      DATABASE.init();
    }
  };

  const octopus = {
    init: function(){
      model.init();
      view.init();
    },
    getCartCount: function(){
      const cartItemList = DATABASE.getCartItemList();
      return cartItemList.reduce((accumulator, currentItem) => accumulator + currentItem.quantity,0);
    }
  };

  const view = {
    init: function(){
      this.countElement =  document.getElementById('cart-items-count');
      this.render();
    },
    render: function(){
      let cartCount = octopus.getCartCount();
      this.countElement.textContent = cartCount;
    }
  };

  octopus.init();
})();
