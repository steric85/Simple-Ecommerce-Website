const ITEMLIST = (function(){

  const octopus = {
    init: function(){
      view.init();
    },
    getItems: function(){
      return DATABASE.getItemList();
    },
    getItemFromItemList: function(itemId){
      let item = this.getItems().find(function(item){
        return (item.id === itemId);
      });
      return item;
    },
    addItemToCart: function(item){
      if(DATABASE.isNotPresentInCart(item.id)){
        DATABASE.addToCartItemList(item);
      }
    },
    updateHeaderCartCount: function(){
      HEADER.displayCartCount();
    }
  };

  const view = (function(){

    function getItemInnerHTML(item){
      return `
        <img class="item-image" src=${item.image} alt="Item image">
        <div class="item-details">
          <div class="item-name ellipsis">${item.name}</div>
          <div class="item-seller ellipsis">${item.seller}</div>
          <div class="item-price">Rs. ${item.price}</div>
        </div>
      `;
    }

    function populatePopup(popupDetailsNode,itemSelected){
      let imageNode = document.createElement("img"),
          textNode  =document.createElement("div");
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

    function openPopup(popupDetailsNode,event){
      let itemId = event.target.closest('.item').dataset.id,
          itemSelected = octopus.getItemFromItemList(itemId);

      populatePopup(popupDetailsNode,itemSelected);

      window.location.href = `#popupbox`;
    }

    function closePopup(popupDetailsDiv){
      popupDetailsDiv.removeAttribute("data-popup-item-id");
      while (popupDetailsDiv.hasChildNodes()) {
          popupDetailsDiv.removeChild(popupDetailsDiv.firstChild);
      }
    }

    return {
      init: function(){
        this.itemListElem = document.getElementById("item-list");
        this.titleElem = document.getElementById("menu-title");
        this.popupDetailsElem = document.getElementById("popup-item-details");
        this.closeButton = document.getElementsByClassName("close")[0];
        this.addToCartButton = document.getElementById("add-to-cart-button");
        this.render();
      },
      render: function(){
        const items = octopus.getItems();
        let category = window.location.search,
            categoryId = category.slice(category.indexOf('=')+1),
            fragment = document.createDocumentFragment(),
            itemNode,quickAddButton;

        this.titleElem.textContent = categoryId.replace('-',' ');

        items.forEach((item) => {
          if(item.category == categoryId){
            itemNode = document.createElement("div");
            itemNode.className="item";
            itemNode.setAttribute("data-id",`${item.id}`);
            itemNode.addEventListener("click", (event)=>openPopup(this.popupDetailsElem,event));
            itemNode.innerHTML = getItemInnerHTML(item);
            quickAddButton = document.createElement("i");
            quickAddButton.className = "material-icons";
            quickAddButton.classList.add("quick-add");
            quickAddButton.textContent = "add_shopping_cart";
            quickAddButton.addEventListener("click", (event)=>{
              let itemId = event.target.closest('.item').dataset.id;
              octopus.addItemToCart({
                    "id":itemId,
                    "quantity":1
              });
              octopus.updateHeaderCartCount();
              event.stopPropagation();
              alert('Added item to cart! :)');
            });
            itemNode.appendChild(quickAddButton);
            fragment.appendChild(itemNode);
          }
        });
        this.itemListElem.appendChild(fragment);

        this.closeButton.addEventListener('click',()=>closePopup(this.popupDetailsElem));
        this.addToCartButton.addEventListener('click',() => {
          let itemId = this.popupDetailsElem.dataset.popupItemId;
          octopus.addItemToCart({
                "id":itemId,
                "quantity":1
          });
          octopus.updateHeaderCartCount();
          window.location.href = `#!`;
          closePopup(this.popupDetailsElem);
        });
      }
    };
  })();

  octopus.init();
})();
