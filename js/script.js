var categories=[
  {
    name: 'DESIGNER PAPERS',
    image: '../images/designerpapers.jpg',
  },
  {
    name: 'CRAFT PUNCHES',
    image: '../images/craftpunches.jpg',
  },
  {
    name: 'WASHI TAPES',
    image: '../images/washitape.jpg',
  },
  {
    name: 'ART ACCESSORIES',
    image: '../images/artaccessories.jpeg',
  },
];

var items=[
  {
    name: 'Back To Basics Collection',
    category: 'designer-papers',
    seller: 'Dovecraft',
    number: 12,
    image: '../images/bluepapers.jpg',
    price: 240,
    description: ['8" x 8" paper pack','150gsm','acid and lignin free'],
    availableQuantity: 5,
    size: '8"x8"',
    colours:['blue','black'],
  },
  {
    name: 'Papericious Premium Edition Love in Paris',
    category: 'designer-papers',
    seller: 'Papericious',
    number: 20,
    image: '../images/love-in-paris-20.jpg',
    price: 400,
    description: ['12 x 12 inch','20 Digital Papers','Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid'
    ,'Great for scrapbooking, making cards, invitations, tags and photographers'],
    availableQuantity: 3,
    size: '12 x 12',
    colours:[],
  },
  {
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
    colours:[],
  },
  {
    name: 'Flower Paper Punch',
    category: 'craft-punches',
    seller: 'SODIAL(R)',
    number: 1,
    image: '../images/flowerpunch.jpg',
    price: 650,
    description: ['Material: ABS + Metal','Suitable for paper: 80-180g','Size: 7 x 4 x 5.6cm','Size of flower cut: about 2.3-2.5cm'],
    availableQuantity: 15,
    size: '',
    colours:[],
  },
  {
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
    colours:[],
  },
  {
    name: 'Super Value Brush Set',
    category: 'art-accessories',
    seller: 'Royal and Langnickel',
    number: 10,
    image: '../images/paintbrush.jpg',
    price: 850,
    description: ['Polymer handle, paint will not chip off like it can tend to do with a wooden handle',
    'Gold Seamless Aluminium Ferrule'],
    availableQuantity: 4,
    size: '',
    colours:[],
  },
  {
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
    colours:[],
  }
];

var cartItems=[];

function displayCategories(){
  var categoryList = document.getElementById('category-list');
  categories.map((category) => {
    let categoryNode = document.createElement("div");
    categoryNode.setAttribute("class","category");
    categoryNode.setAttribute("onclick","displayItems(this)");
    categoryNode.innerHTML = `
      <img class ="category-image" src=${category.image} alt="${category.name}">
      <div class="category-name"> ${category.name.toUpperCase()} </div>
    `;
    categoryList.appendChild(categoryNode);
  });
}

function displayItems(ele){
  window.location.href = "menu.html";
  // adding parameters to link
  // change category name
  // filter the items according to the category chosen
}


function incrementCartCount(){
  var countElement =  document.getElementById('cart-items-count');
  var count = parseInt(countElement.innerHTML);
  countElement.innerHTML = count + 1;
  // need to add the element to cart array;
  // update the count with the quantity -- removed qty
  window.location.href = "#";
}

function updateCartDetails(){
  var prices = document.getElementsByClassName('cart-item-price');
  var qty = document.getElementsByClassName('cart-item-qty');
  var total = 0,totalQty = 0;
  for(var i=0;i< prices.length;i++){
    total += parseInt(prices.item(i).innerHTML);
    totalQty += (parseInt(qty.item(i).value)||0);
  }
  document.getElementById('total-amount').innerHTML=total;
  document.getElementById('cart-items-count').innerHTML=totalQty;
}

function removeItem(ele){
  var parentRow = ele.closest('tr');
  // var qty = parentRow.getElementsByTagName('input')[0].value;
  ele.closest('tr').parentNode.removeChild(parentRow);
  updateCartDetails();
}

function updatePrice(ele){
  var parentRow = ele.closest('tr');
  var itemName = parentRow.getElementsByClassName('cart-item-name')[0].innerHTML.toString();
  var index =0;
  while(index < items.length){
    if(itemName.toLowerCase() == items[index].name.toLowerCase()){
      break;
    }
    index++;
  }
  if(ele.value > items[index].availableQuantity){
    ele.value = items[index].availableQuantity;
  }
  parentRow.getElementsByClassName('cart-item-price')[0].innerHTML = ele.value * items[index].price;
}

document.addEventListener('input',function(e){
  updatePrice(e.target);
  updateCartDetails();
},false);
