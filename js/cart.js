const CART = (function(){

  const octopus = {
    init: function(){
      view.init();
    },
    getCartItems: function(){
      return DATABASE.getCartItemList();
    },
    getItemFromItemList: function(itemId){
      let item = DATABASE.getItemList().find(function(item){
        return (item.id === itemId);
      });
      return item;
    },
    addItemToCart: function(item){
      DATABASE.addToCartItemList(item);
    },
    updateHeaderCartCount: function(){
      HEADER.displayCartCount();
    },
    removeItemFromCart: function(itemId){
      DATABASE.removeFromCartItemList(itemId);
    }
  };

  const view = (function(){

    function getCartItemInnerHTML(cartItemImage,cartItemName,cartItemQty,totalItemPrice){
      return `
        <td>
          <div class="cart-item-details">
            <i class="material-icons delete">cancel</i>
            <img class="cart-item-image" src=${cartItemImage}>
            <div class="cart-item-description">
              <div class="cart-item-name">${cartItemName}</div>
              <div class="cart-item-detail">Pack of eight</div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <input class="cart-item-qty" type="number" size="1" value=${cartItemQty} min="1">
          </div>
        </td>
        <td>
          <div class="cart-item-price price-column">${totalItemPrice}</div>
        </td>
      `;
    }

    function updateCartTotal(totalAmountElem){
      let prices = document.getElementsByClassName('cart-item-price'),
          total = 0;
      for(let i=0;i< prices.length;i++){
        total += parseInt(prices.item(i).textContent);
      }
      totalAmountElem.textContent=total;
    }

    function removeItem(element){
      var parentRow = element.closest('tr'),
          cartItemId = parentRow.dataset.itemId;
      octopus.removeItemFromCart(cartItemId);
      parentRow.parentNode.removeChild(parentRow);
    }

    function updateItemQtyInCart(element){
      var quantity = element.value,
          cartItemId = element.closest('tr').dataset.itemId;
      octopus.removeItemFromCart(cartItemId);
      octopus.addItemToCart({
        'id':cartItemId,
        'quantity':parseInt(element.value),
      });
    }

    function updateItemPrice(element){
      let parentRow = element.closest('tr'),
          cartItemId = parentRow.dataset.itemId,
          cartItem = octopus.getItemFromItemList(cartItemId);
      if(element.value <= 0){
        element.value = 1;
      }
      if(element.value > cartItem.availableQuantity){
        element.value = cartItem.availableQuantity;
        alert(cartItem.availableQuantity+" is the maximum available quantity for this item!");
      }
      parentRow.getElementsByClassName('cart-item-price')[0].textContent = element.value * cartItem.price;
    }

    return {
      init: function(){
        this.cartTableBody = document.getElementById('cart-table-body');
        this.totalAmountElem = document.getElementById('total-amount');
        this.render();
      },
      render: function(){
        const cartItems = octopus.getCartItems();
        let fragment = document.createDocumentFragment();

        cartItems.forEach((cItem) => {
          let cartItem = octopus.getItemFromItemList(cItem.id),
              tableRow = document.createElement("tr"),
              totalItemPrice = cartItem.price * cItem.quantity;
          tableRow.setAttribute("data-item-id",`${cartItem.id}`);
          tableRow.innerHTML = getCartItemInnerHTML(cartItem.image,cartItem.name,cItem.quantity,totalItemPrice);
          fragment.appendChild(tableRow);
        });

        this.cartTableBody.prepend(fragment);
        updateCartTotal(this.totalAmountElem);

        document.addEventListener('click',(event) =>
        {
          if(event.target.nodeName === "I"){
            removeItem(event.target);
            updateCartTotal(this.totalAmountElem);
            octopus.updateHeaderCartCount();
          }
          else if(event.target.nodeName === "INPUT"){
            updateItemPrice(event.target);
            updateItemQtyInCart(event.target);
            updateCartTotal(this.totalAmountElem);
            octopus.updateHeaderCartCount();
          }
        });
      }
    };
  })();

  octopus.init();
})();
