var categories=[
  {
    id: 'designer-papers',
    name: 'Designer Papers',
    image: '../images/designerpapers.jpg',
  },
  {
    id: 'craft-punches',
    name: 'Craft Punches',
    image: '../images/craftpunches.jpg',
  },
  {
    id: 'washi-tapes',
    name: 'Washi Tapes',
    image: '../images/washitape.jpg',
  },
  {
    id: 'art-accessories',
    name: 'Art Accessories',
    image: '../images/artaccessories.jpeg',
  },
];

var items=[
  {
    id: 'dp1',
    name: 'Back To Basics Collection',
    category: 'designer-papers',
    seller: 'Dovecraft',
    number: 12,
    image: '../images/bluepapers.jpg',
    price: 240,
    description: ['8" x 8" paper pack','150gsm','acid and lignin free'],
    availableQuantity: 5,
    size: '8"x8"',
  },
  {
    id: 'dp2',
    name: 'Premium Edition Love in Paris',
    category: 'designer-papers',
    seller: 'Papericious',
    number: 20,
    image: '../images/love-in-paris-20.jpg',
    price: 400,
    description: ['12 x 12 inch','20 Digital Papers','Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid'
    ,'Great for scrapbooking, making cards, invitations, tags and photographers'],
    availableQuantity: 3,
    size: '12 x 12',
  },
  {
    id: 'wt1',
    name: 'Cat Washi Tape',
    category: 'washi-tapes',
    seller: 'Hexawata',
    number: 8,
    image: '../images/catwashitape.jpg',
    price: 640,
    description: ['Material: Paper','Width:1.5cm','Length: 10m'],
    availableQuantity: 5,
    size: '',
    colours:[],
  },
  {
    id: 'wt2',
    name: 'Gold Series Washi Paper Tape',
    category: 'washi-tapes',
    seller: 'Magideal',
    number: 10,
    image: '../images/goldentape.jpg',
    price: 720,
    description: ['Package includes 10 tapes','Made By Paper',
    'Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects'],
    availableQuantity: 2,
    size: '',
  },
  {
    id: 'cp1',
    name: 'Flower Paper Punch',
    category: 'craft-punches',
    seller: 'SODIAL(R)',
    number: 1,
    image: '../images/flowerpunch.jpeg',
    price: 650,
    description: ['Material: ABS + Metal','Suitable for paper: 80-180g','Size: 7 x 4 x 5.6cm','Size of flower cut: about 2.3-2.5cm'],
    availableQuantity: 20,
    size: '',
  },
  {
    id: 'cp2',
    name: 'Cupcake Punch and Stamp',
    category: 'craft-punches',
    seller: 'Martha Stewart Crafts',
    number: 1,
    image: '../images/cupcakespunch.jpg',
    price: 1500,
    description: ['Product Type: Scrapbooks-Paper Punches',
    'Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'aa1',
    name: 'Super Value Brush Set',
    category: 'art-accessories',
    seller: 'Royal and Langnickel',
    number: 10,
    image: '../images/paintbrush.jpeg',
    price: 850,
    description: ['Polymer handle, paint will not chip off like it can tend to do with a wooden handle',
    'Gold Seamless Aluminium Ferrule'],
    availableQuantity: 4,
    size: '',
  },
  {
    id: 'aa2',
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'dp3',
    name: 'Back To Basics Collection',
    category: 'designer-papers',
    seller: 'Dovecraft',
    number: 12,
    image: '../images/bluepapers.jpg',
    price: 240,
    description: ['8" x 8" paper pack','150gsm','acid and lignin free'],
    availableQuantity: 5,
    size: '8"x8"',
  },
  {
    id: 'dp4',
    name: 'Premium Edition Love in Paris',
    category: 'designer-papers',
    seller: 'Papericious',
    number: 20,
    image: '../images/love-in-paris-20.jpg',
    price: 400,
    description: ['12 x 12 inch','20 Digital Papers','Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid'
    ,'Great for scrapbooking, making cards, invitations, tags and photographers'],
    availableQuantity: 3,
    size: '12 x 12',
  },
  {
    id: 'wt3',
    name: 'Cat Washi Tape',
    category: 'washi-tapes',
    seller: 'Hexawata',
    number: 8,
    image: '../images/catwashitape.jpg',
    price: 640,
    description: ['Material: Paper','Width:1.5cm','Length: 10m'],
    availableQuantity: 5,
    size: '',
    colours:[],
  },
  {
    id: 'wt4',
    name: 'Gold Series Washi Paper Tape',
    category: 'washi-tapes',
    seller: 'Magideal',
    number: 10,
    image: '../images/goldentape.jpg',
    price: 720,
    description: ['Package includes 10 tapes','Made By Paper',
    'Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects'],
    availableQuantity: 2,
    size: '',
  },
  {
    id: 'cp3',
    name: 'Flower Paper Punch',
    category: 'craft-punches',
    seller: 'SODIAL(R)',
    number: 1,
    image: '../images/flowerpunch.jpeg',
    price: 650,
    description: ['Material: ABS + Metal','Suitable for paper: 80-180g','Size: 7 x 4 x 5.6cm','Size of flower cut: about 2.3-2.5cm'],
    availableQuantity: 20,
    size: '',
  },
  {
    id: 'cp4',
    name: 'Cupcake Punch and Stamp',
    category: 'craft-punches',
    seller: 'Martha Stewart Crafts',
    number: 1,
    image: '../images/cupcakespunch.jpg',
    price: 1500,
    description: ['Product Type: Scrapbooks-Paper Punches',
    'Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'aa3',
    name: 'Super Value Brush Set',
    category: 'art-accessories',
    seller: 'Royal and Langnickel',
    number: 10,
    image: '../images/paintbrush.jpeg',
    price: 850,
    description: ['Polymer handle, paint will not chip off like it can tend to do with a wooden handle',
    'Gold Seamless Aluminium Ferrule'],
    availableQuantity: 4,
    size: '',
  },
  {
    id: 'aa4',
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'dp5',
    name: 'Back To Basics Collection',
    category: 'designer-papers',
    seller: 'Dovecraft',
    number: 12,
    image: '../images/bluepapers.jpg',
    price: 240,
    description: ['8" x 8" paper pack','150gsm','acid and lignin free'],
    availableQuantity: 5,
    size: '8"x8"',
  },
  {
    id: 'dp6',
    name: 'Premium Edition Love in Paris',
    category: 'designer-papers',
    seller: 'Papericious',
    number: 20,
    image: '../images/love-in-paris-20.jpg',
    price: 400,
    description: ['12 x 12 inch','20 Digital Papers','Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid'
    ,'Great for scrapbooking, making cards, invitations, tags and photographers'],
    availableQuantity: 3,
    size: '12 x 12',
  },
  {
    id: 'wt5',
    name: 'Cat Washi Tape',
    category: 'washi-tapes',
    seller: 'Hexawata',
    number: 8,
    image: '../images/catwashitape.jpg',
    price: 640,
    description: ['Material: Paper','Width:1.5cm','Length: 10m'],
    availableQuantity: 5,
    size: '',
    colours:[],
  },
  {
    id: 'wt6',
    name: 'Gold Series Washi Paper Tape',
    category: 'washi-tapes',
    seller: 'Magideal',
    number: 10,
    image: '../images/goldentape.jpg',
    price: 720,
    description: ['Package includes 10 tapes','Made By Paper',
    'Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects'],
    availableQuantity: 2,
    size: '',
  },
  {
    id: 'cp5',
    name: 'Flower Paper Punch',
    category: 'craft-punches',
    seller: 'SODIAL(R)',
    number: 1,
    image: '../images/flowerpunch.jpeg',
    price: 650,
    description: ['Material: ABS + Metal','Suitable for paper: 80-180g','Size: 7 x 4 x 5.6cm','Size of flower cut: about 2.3-2.5cm'],
    availableQuantity: 20,
    size: '',
  },
  {
    id: 'cp6',
    name: 'Cupcake Punch and Stamp',
    category: 'craft-punches',
    seller: 'Martha Stewart Crafts',
    number: 1,
    image: '../images/cupcakespunch.jpg',
    price: 1500,
    description: ['Product Type: Scrapbooks-Paper Punches',
    'Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'aa5',
    name: 'Super Value Brush Set',
    category: 'art-accessories',
    seller: 'Royal and Langnickel',
    number: 10,
    image: '../images/paintbrush.jpeg',
    price: 850,
    description: ['Polymer handle, paint will not chip off like it can tend to do with a wooden handle',
    'Gold Seamless Aluminium Ferrule'],
    availableQuantity: 4,
    size: '',
  },
  {
    id: 'aa6',
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'dp7',
    name: 'Back To Basics Collection',
    category: 'designer-papers',
    seller: 'Dovecraft',
    number: 12,
    image: '../images/bluepapers.jpg',
    price: 240,
    description: ['8" x 8" paper pack','150gsm','acid and lignin free'],
    availableQuantity: 5,
    size: '8"x8"',
  },
  {
    id: 'dp8',
    name: 'Premium Edition Love in Paris',
    category: 'designer-papers',
    seller: 'Papericious',
    number: 20,
    image: '../images/love-in-paris-20.jpg',
    price: 400,
    description: ['12 x 12 inch','20 Digital Papers','Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid'
    ,'Great for scrapbooking, making cards, invitations, tags and photographers'],
    availableQuantity: 3,
    size: '12 x 12',
  },
  {
    id: 'wt7',
    name: 'Cat Washi Tape',
    category: 'washi-tapes',
    seller: 'Hexawata',
    number: 8,
    image: '../images/catwashitape.jpg',
    price: 640,
    description: ['Material: Paper','Width:1.5cm','Length: 10m'],
    availableQuantity: 5,
    size: '',
    colours:[],
  },
  {
    id: 'wt8',
    name: 'Gold Series Washi Paper Tape',
    category: 'washi-tapes',
    seller: 'Magideal',
    number: 10,
    image: '../images/goldentape.jpg',
    price: 720,
    description: ['Package includes 10 tapes','Made By Paper',
    'Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects'],
    availableQuantity: 2,
    size: '',
  },
  {
    id: 'cp7',
    name: 'Flower Paper Punch',
    category: 'craft-punches',
    seller: 'SODIAL(R)',
    number: 1,
    image: '../images/flowerpunch.jpeg',
    price: 650,
    description: ['Material: ABS + Metal','Suitable for paper: 80-180g','Size: 7 x 4 x 5.6cm','Size of flower cut: about 2.3-2.5cm'],
    availableQuantity: 20,
    size: '',
  },
  {
    id: 'cp8',
    name: 'Cupcake Punch and Stamp',
    category: 'craft-punches',
    seller: 'Martha Stewart Crafts',
    number: 1,
    image: '../images/cupcakespunch.jpg',
    price: 1500,
    description: ['Product Type: Scrapbooks-Paper Punches',
    'Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'aa7',
    name: 'Super Value Brush Set',
    category: 'art-accessories',
    seller: 'Royal and Langnickel',
    number: 10,
    image: '../images/paintbrush.jpeg',
    price: 850,
    description: ['Polymer handle, paint will not chip off like it can tend to do with a wooden handle',
    'Gold Seamless Aluminium Ferrule'],
    availableQuantity: 4,
    size: '',
  },
  {
    id: 'aa8',
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'dp9',
    name: 'Back To Basics Collection',
    category: 'designer-papers',
    seller: 'Dovecraft',
    number: 12,
    image: '../images/bluepapers.jpg',
    price: 240,
    description: ['8" x 8" paper pack','150gsm','acid and lignin free'],
    availableQuantity: 5,
    size: '8"x8"',
  },
  {
    id: 'dp10',
    name: 'Premium Edition Love in Paris',
    category: 'designer-papers',
    seller: 'Papericious',
    number: 20,
    image: '../images/love-in-paris-20.jpg',
    price: 400,
    description: ['12 x 12 inch','20 Digital Papers','Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid'
    ,'Great for scrapbooking, making cards, invitations, tags and photographers'],
    availableQuantity: 3,
    size: '12 x 12',
  },
  {
    id: 'wt9',
    name: 'Cat Washi Tape',
    category: 'washi-tapes',
    seller: 'Hexawata',
    number: 8,
    image: '../images/catwashitape.jpg',
    price: 640,
    description: ['Material: Paper','Width:1.5cm','Length: 10m'],
    availableQuantity: 5,
    size: '',
    colours:[],
  },
  {
    id: 'wt10',
    name: 'Gold Series Washi Paper Tape',
    category: 'washi-tapes',
    seller: 'Magideal',
    number: 10,
    image: '../images/goldentape.jpg',
    price: 720,
    description: ['Package includes 10 tapes','Made By Paper',
    'Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects'],
    availableQuantity: 2,
    size: '',
  },
  {
    id: 'cp9',
    name: 'Flower Paper Punch',
    category: 'craft-punches',
    seller: 'SODIAL(R)',
    number: 1,
    image: '../images/flowerpunch.jpeg',
    price: 650,
    description: ['Material: ABS + Metal','Suitable for paper: 80-180g','Size: 7 x 4 x 5.6cm','Size of flower cut: about 2.3-2.5cm'],
    availableQuantity: 20,
    size: '',
  },
  {
    id: 'cp10',
    name: 'Cupcake Punch and Stamp',
    category: 'craft-punches',
    seller: 'Martha Stewart Crafts',
    number: 1,
    image: '../images/cupcakespunch.jpg',
    price: 1500,
    description: ['Product Type: Scrapbooks-Paper Punches',
    'Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'aa9',
    name: 'Super Value Brush Set',
    category: 'art-accessories',
    seller: 'Royal and Langnickel',
    number: 10,
    image: '../images/paintbrush.jpeg',
    price: 850,
    description: ['Polymer handle, paint will not chip off like it can tend to do with a wooden handle',
    'Gold Seamless Aluminium Ferrule'],
    availableQuantity: 4,
    size: '',
  },
  {
    id: 'aa10',
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
  },
];

var cartItems=[
  {
    id: 'wt1',
    name: 'Cat Washi Tape',
    category: 'washi-tapes',
    seller: 'Hexawata',
    number: 8,
    image: '../images/catwashitape.jpg',
    price: 640,
    description: ['Material: Paper','Width:1.5cm','Length: 10m'],
    availableQuantity: 5,
    size: '',
    colours:[],
  },
  {
    id: 'aa10',
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
  },
  {
    id: 'aa7',
    name: 'Super Value Brush Set',
    category: 'art-accessories',
    seller: 'Royal and Langnickel',
    number: 10,
    image: '../images/paintbrush.jpeg',
    price: 850,
    description: ['Polymer handle, paint will not chip off like it can tend to do with a wooden handle',
    'Gold Seamless Aluminium Ferrule'],
    availableQuantity: 4,
    size: '',
  }
];

function displayCartCount(){
  var countElement =  document.getElementById('cart-items-count');
  countElement.innerHTML = cartItems.length;
}

function displayCategories(){
  displayCartCount();
  var categoryList = document.getElementById('category-list');
  categories.forEach((category) => {
    var categoryNode = document.createElement("div");
    categoryNode.setAttribute("class","category");
    categoryNode.setAttribute("data-id",`${category.id}`);
    categoryNode.setAttribute("onclick","displayCategoryItems(this)");
    categoryNode.innerHTML = `
      <img class ="category-image" src=${category.image} alt="${category.name}">
      <div class="category-name"> ${category.name} </div>
    `;
    categoryList.appendChild(categoryNode);
  });
}

function displayCategoryItems(ele){
  var categoryId = ele.dataset.id;
  window.location.href = `itemlist.html?category=${categoryId}`;
}

function displayItems(){
  displayCartCount();
  var category = window.location.search,
      categoryId = category.slice(category.indexOf('=')+1),
      itemList = document.getElementById('item-list');
  document.getElementById('menu-title').innerHTML = categoryId.replace('-',' ');
  items.forEach((item) => {
    if(item.category == categoryId){
      var itemNode = document.createElement("div");
      itemNode.setAttribute("onclick","openPopup(this)");
      itemNode.setAttribute("class","item");
      itemNode.setAttribute("data-id",`${item.id}`);
      itemNode.innerHTML = `
        <img class="item-image" src=${item.image} alt="Item image">
        <div class="item-name ellipsis">${item.name}</div>
        <div class="item-seller ellipsis">${item.seller}</div>
        <div class="item-price">Rs. ${item.price}</div>
      `;
      itemList.appendChild(itemNode);
    }
  });
}

function openPopup(ele){
  var itemId = ele.closest('.item').dataset.id,
      itemSelected = items.find(function(item){
        return (item.id == itemId);
      }),
      popupDetailsNode = document.getElementById('popup-item-details'),
      imageNode = document.createElement("img"),
      textNode  =document.createElement("div");
      htmlText =`
        <div class="popup-item-name">${itemSelected.name}</div>
        <div class="popup-item-seller">${itemSelected.seller}</div>
        <div>
          <ul class="popup-item-description">`;

  popupDetailsNode.setAttribute("data-popup-item-id",`${itemSelected.id}`);
  imageNode.setAttribute("class","popup-item-image");
  imageNode.setAttribute("src",itemSelected.image);
  imageNode.setAttribute("alt",itemSelected.name);
  textNode.setAttribute("class","popup-item-text");
  itemSelected.description.forEach((element) => {
    var listNode = document.createElement("li");
    listNode.innerHTML = element;
    htmlText += listNode.outerHTML;
  })
  htmlText +=`</ul>
    </div>
    <div class="popup-item-price">Price: Rs. ${itemSelected.price}</div>`;
  textNode.innerHTML = htmlText;
  popupDetailsNode.appendChild(imageNode);
  popupDetailsNode.appendChild(textNode);
  window.location.href = `#popupbox`;
}

function removePopupChildren(){
  var popupDetailsDiv = document.getElementById('popup-item-details');
  popupDetailsDiv.removeAttribute("data-popup-item-id");
  while (popupDetailsDiv.hasChildNodes()) {
      popupDetailsDiv.removeChild(popupDetailsDiv.firstChild);
  }
}

function incrementCartCount(){
  var itemId = document.getElementById('popup-item-details').dataset.popupItemId,
      popupItem = items.find(function(item){
    return (item.id == itemId);
  });
  (cartItems.indexOf(popupItem)>=0) ? cartItems:cartItems.push(popupItem);
  displayCartCount();
  window.location.href = `#!`;
  removePopupChildren();
}

function displayCartItems(){
  displayCartCount();
  var cartTableBody = document.getElementById('cart-table-body');
  cartItems.forEach((item) => {
    var tableRow = document.createElement("tr");
    tableRow.setAttribute("data-item-id",`${item.id}`);
    tableRow.innerHTML = `
      <td>
        <div class="cart-item-details">
          <i class="material-icons delete" onclick="removeItem(this)">cancel</i>
          <img class="cart-item-image" src=${item.image}>
          <div class="cart-item-description">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-detail">Pack of eight</div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <input class="cart-item-qty" type="number" size="1" value="1" min="1" >
        </div>
      </td>
      <td>
        <div class="cart-item-price price-column">${item.price}</div>
      </td>
    `;
    cartTableBody.prepend(tableRow);
  });
}

function updateCartDetails(){
  var prices = document.getElementsByClassName('cart-item-price'),
      qty = document.getElementsByClassName('cart-item-qty'),
      total = 0,
      totalQty = 0;
  for(var i=0;i< prices.length;i++){
    total += parseInt(prices.item(i).innerHTML);
    totalQty += (parseInt(qty.item(i).value)||0);
  }
  document.getElementById('total-amount').innerHTML=total;
  document.getElementById('cart-items-count').innerHTML=totalQty;
}

function removeItem(ele){
  var parentRow = ele.closest('tr'),
      cartItemId = parentRow.dataset.itemId,
      cartItemIndex = cartItems.findIndex(function(cartItem){
    return (cartItem.id == cartItemId);
  });
  cartItems.splice(cartItemIndex,1);
  parentRow.parentNode.removeChild(parentRow);
  updateCartDetails();
}

function updatePrice(ele){
  var parentRow = ele.closest('tr'),
      cartItemId = parentRow.dataset.itemId,
      cartItem = cartItems.find(function(cartItem){
          return (cartItem.id == cartItemId);
      }),
      itemName = parentRow.getElementsByClassName('cart-item-name')[0].innerHTML.toString();
  if(ele.value <= 0){
    ele.value = 1;
  }
  if(ele.value > cartItem.availableQuantity){
    alert('You have reached maximum available quantity!');
    ele.value = cartItem.availableQuantity;
  }
  parentRow.getElementsByClassName('cart-item-price')[0].innerHTML = ele.value * cartItem.price;
}

document.addEventListener('input',function(e){
  updatePrice(e.target);
  updateCartDetails();
},false);
