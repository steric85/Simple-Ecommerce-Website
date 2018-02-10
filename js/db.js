const DATABASE = (function(){

  //private
  const categoryList=[
    {
      id: "designer-papers",
      name: "Designer Papers",
      image: "../images/designerpapers.jpg",
    },
    {
      id: "craft-punches",
      name: "Craft Punches",
      image: "../images/craftpunches.jpg",
    },
    {
      id: "washi-tapes",
      name: "Washi Tapes",
      image: "../images/washitape.jpg",
    },
    {
      id: "art-accessories",
      name: "Art Accessories",
      image: "../images/artaccessories.jpeg",
    }
  ],
  itemList=[
    {
      id: "dp1",
      name: "Back To Basics Collection",
      category: "designer-papers",
      seller: "Dovecraft",
      number: 12,
      image: "../images/bluepapers.jpg",
      price: 240,
      description: ["8" x 8" paper pack","150gsm","acid and lignin free"],
      availableQuantity: 5,
      size: "8"x8"",
    },
    {
      id: "dp2",
      name: "Premium Edition Love in Paris",
      category: "designer-papers",
      seller: "Papericious",
      number: 20,
      image: "../images/love-in-paris-20.jpg",
      price: 400,
      description: ["12 x 12 inch","20 Digital Papers","Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid"
      ,"Great for scrapbooking, making cards, invitations, tags and photographers"],
      availableQuantity: 3,
      size: "12 x 12",
    },
    {
      id: "wt1",
      name: "Cat Washi Tape",
      category: "washi-tapes",
      seller: "Hexawata",
      number: 8,
      image: "../images/catwashitape.jpg",
      price: 640,
      description: ["Material: Paper","Width:1.5cm","Length: 10m"],
      availableQuantity: 5,
      size: "",
      colours:[],
    },
    {
      id: "wt2",
      name: "Gold Series Washi Paper Tape",
      category: "washi-tapes",
      seller: "Magideal",
      number: 10,
      image: "../images/goldentape.jpg",
      price: 720,
      description: ["Package includes 10 tapes","Made By Paper",
      "Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects"],
      availableQuantity: 2,
      size: "",
    },
    {
      id: "cp1",
      name: "Flower Paper Punch",
      category: "craft-punches",
      seller: "SODIAL(R)",
      number: 1,
      image: "../images/flowerpunch.jpeg",
      price: 650,
      description: ["Material: ABS + Metal","Suitable for paper: 80-180g","Size: 7 x 4 x 5.6cm","Size of flower cut: about 2.3-2.5cm"],
      availableQuantity: 20,
      size: "",
    },
    {
      id: "cp2",
      name: "Cupcake Punch and Stamp",
      category: "craft-punches",
      seller: "Martha Stewart Crafts",
      number: 1,
      image: "../images/cupcakespunch.jpg",
      price: 1500,
      description: ["Product Type: Scrapbooks-Paper Punches",
      "Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "aa1",
      name: "Super Value Brush Set",
      category: "art-accessories",
      seller: "Royal and Langnickel",
      number: 10,
      image: "../images/paintbrush.jpeg",
      price: 850,
      description: ["Polymer handle, paint will not chip off like it can tend to do with a wooden handle",
      "Gold Seamless Aluminium Ferrule"],
      availableQuantity: 4,
      size: "",
    },
    {
      id: "aa2",
      name: "DIY Craft Scissors",
      category: "art-accessories",
      seller: "Wave Edge Craft",
      number: 6,
      image: "../images/craftscissors.jpg",
      price: 400,
      description: ["One lot including 6 different designs","Material: Metal and Plastic","Size: 5inch"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "dp3",
      name: "Back To Basics Collection",
      category: "designer-papers",
      seller: "Dovecraft",
      number: 12,
      image: "../images/bluepapers.jpg",
      price: 240,
      description: ["8" x 8" paper pack","150gsm","acid and lignin free"],
      availableQuantity: 5,
      size: "8"x8"",
    },
    {
      id: "dp4",
      name: "Premium Edition Love in Paris",
      category: "designer-papers",
      seller: "Papericious",
      number: 20,
      image: "../images/love-in-paris-20.jpg",
      price: 400,
      description: ["12 x 12 inch","20 Digital Papers","Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid"
      ,"Great for scrapbooking, making cards, invitations, tags and photographers"],
      availableQuantity: 3,
      size: "12 x 12",
    },
    {
      id: "wt3",
      name: "Cat Washi Tape",
      category: "washi-tapes",
      seller: "Hexawata",
      number: 8,
      image: "../images/catwashitape.jpg",
      price: 640,
      description: ["Material: Paper","Width:1.5cm","Length: 10m"],
      availableQuantity: 5,
      size: "",
      colours:[],
    },
    {
      id: "wt4",
      name: "Gold Series Washi Paper Tape",
      category: "washi-tapes",
      seller: "Magideal",
      number: 10,
      image: "../images/goldentape.jpg",
      price: 720,
      description: ["Package includes 10 tapes","Made By Paper",
      "Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects"],
      availableQuantity: 2,
      size: "",
    },
    {
      id: "cp3",
      name: "Flower Paper Punch",
      category: "craft-punches",
      seller: "SODIAL(R)",
      number: 1,
      image: "../images/flowerpunch.jpeg",
      price: 650,
      description: ["Material: ABS + Metal","Suitable for paper: 80-180g","Size: 7 x 4 x 5.6cm","Size of flower cut: about 2.3-2.5cm"],
      availableQuantity: 20,
      size: "",
    },
    {
      id: "cp4",
      name: "Cupcake Punch and Stamp",
      category: "craft-punches",
      seller: "Martha Stewart Crafts",
      number: 1,
      image: "../images/cupcakespunch.jpg",
      price: 1500,
      description: ["Product Type: Scrapbooks-Paper Punches",
      "Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "aa3",
      name: "Super Value Brush Set",
      category: "art-accessories",
      seller: "Royal and Langnickel",
      number: 10,
      image: "../images/paintbrush.jpeg",
      price: 850,
      description: ["Polymer handle, paint will not chip off like it can tend to do with a wooden handle",
      "Gold Seamless Aluminium Ferrule"],
      availableQuantity: 4,
      size: "",
    },
    {
      id: "aa4",
      name: "DIY Craft Scissors",
      category: "art-accessories",
      seller: "Wave Edge Craft",
      number: 6,
      image: "../images/craftscissors.jpg",
      price: 400,
      description: ["One lot including 6 different designs","Material: Metal and Plastic","Size: 5inch"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "dp5",
      name: "Back To Basics Collection",
      category: "designer-papers",
      seller: "Dovecraft",
      number: 12,
      image: "../images/bluepapers.jpg",
      price: 240,
      description: ["8" x 8" paper pack","150gsm","acid and lignin free"],
      availableQuantity: 5,
      size: "8"x8"",
    },
    {
      id: "dp6",
      name: "Premium Edition Love in Paris",
      category: "designer-papers",
      seller: "Papericious",
      number: 20,
      image: "../images/love-in-paris-20.jpg",
      price: 400,
      description: ["12 x 12 inch","20 Digital Papers","Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid"
      ,"Great for scrapbooking, making cards, invitations, tags and photographers"],
      availableQuantity: 3,
      size: "12 x 12",
    },
    {
      id: "wt5",
      name: "Cat Washi Tape",
      category: "washi-tapes",
      seller: "Hexawata",
      number: 8,
      image: "../images/catwashitape.jpg",
      price: 640,
      description: ["Material: Paper","Width:1.5cm","Length: 10m"],
      availableQuantity: 5,
      size: "",
      colours:[],
    },
    {
      id: "wt6",
      name: "Gold Series Washi Paper Tape",
      category: "washi-tapes",
      seller: "Magideal",
      number: 10,
      image: "../images/goldentape.jpg",
      price: 720,
      description: ["Package includes 10 tapes","Made By Paper",
      "Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects"],
      availableQuantity: 2,
      size: "",
    },
    {
      id: "cp5",
      name: "Flower Paper Punch",
      category: "craft-punches",
      seller: "SODIAL(R)",
      number: 1,
      image: "../images/flowerpunch.jpeg",
      price: 650,
      description: ["Material: ABS + Metal","Suitable for paper: 80-180g","Size: 7 x 4 x 5.6cm","Size of flower cut: about 2.3-2.5cm"],
      availableQuantity: 20,
      size: "",
    },
    {
      id: "cp6",
      name: "Cupcake Punch and Stamp",
      category: "craft-punches",
      seller: "Martha Stewart Crafts",
      number: 1,
      image: "../images/cupcakespunch.jpg",
      price: 1500,
      description: ["Product Type: Scrapbooks-Paper Punches",
      "Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "aa5",
      name: "Super Value Brush Set",
      category: "art-accessories",
      seller: "Royal and Langnickel",
      number: 10,
      image: "../images/paintbrush.jpeg",
      price: 850,
      description: ["Polymer handle, paint will not chip off like it can tend to do with a wooden handle",
      "Gold Seamless Aluminium Ferrule"],
      availableQuantity: 4,
      size: "",
    },
    {
      id: "aa6",
      name: "DIY Craft Scissors",
      category: "art-accessories",
      seller: "Wave Edge Craft",
      number: 6,
      image: "../images/craftscissors.jpg",
      price: 400,
      description: ["One lot including 6 different designs","Material: Metal and Plastic","Size: 5inch"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "dp7",
      name: "Back To Basics Collection",
      category: "designer-papers",
      seller: "Dovecraft",
      number: 12,
      image: "../images/bluepapers.jpg",
      price: 240,
      description: ["8" x 8" paper pack","150gsm","acid and lignin free"],
      availableQuantity: 5,
      size: "8"x8"",
    },
    {
      id: "dp8",
      name: "Premium Edition Love in Paris",
      category: "designer-papers",
      seller: "Papericious",
      number: 20,
      image: "../images/love-in-paris-20.jpg",
      price: 400,
      description: ["12 x 12 inch","20 Digital Papers","Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid"
      ,"Great for scrapbooking, making cards, invitations, tags and photographers"],
      availableQuantity: 3,
      size: "12 x 12",
    },
    {
      id: "wt7",
      name: "Cat Washi Tape",
      category: "washi-tapes",
      seller: "Hexawata",
      number: 8,
      image: "../images/catwashitape.jpg",
      price: 640,
      description: ["Material: Paper","Width:1.5cm","Length: 10m"],
      availableQuantity: 5,
      size: "",
      colours:[],
    },
    {
      id: "wt8",
      name: "Gold Series Washi Paper Tape",
      category: "washi-tapes",
      seller: "Magideal",
      number: 10,
      image: "../images/goldentape.jpg",
      price: 720,
      description: ["Package includes 10 tapes","Made By Paper",
      "Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects"],
      availableQuantity: 2,
      size: "",
    },
    {
      id: "cp7",
      name: "Flower Paper Punch",
      category: "craft-punches",
      seller: "SODIAL(R)",
      number: 1,
      image: "../images/flowerpunch.jpeg",
      price: 650,
      description: ["Material: ABS + Metal","Suitable for paper: 80-180g","Size: 7 x 4 x 5.6cm","Size of flower cut: about 2.3-2.5cm"],
      availableQuantity: 20,
      size: "",
    },
    {
      id: "cp8",
      name: "Cupcake Punch and Stamp",
      category: "craft-punches",
      seller: "Martha Stewart Crafts",
      number: 1,
      image: "../images/cupcakespunch.jpg",
      price: 1500,
      description: ["Product Type: Scrapbooks-Paper Punches",
      "Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "aa7",
      name: "Super Value Brush Set",
      category: "art-accessories",
      seller: "Royal and Langnickel",
      number: 10,
      image: "../images/paintbrush.jpeg",
      price: 850,
      description: ["Polymer handle, paint will not chip off like it can tend to do with a wooden handle",
      "Gold Seamless Aluminium Ferrule"],
      availableQuantity: 4,
      size: "",
    },
    {
      id: "aa8",
      name: "DIY Craft Scissors",
      category: "art-accessories",
      seller: "Wave Edge Craft",
      number: 6,
      image: "../images/craftscissors.jpg",
      price: 400,
      description: ["One lot including 6 different designs","Material: Metal and Plastic","Size: 5inch"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "dp9",
      name: "Back To Basics Collection",
      category: "designer-papers",
      seller: "Dovecraft",
      number: 12,
      image: "../images/bluepapers.jpg",
      price: 240,
      description: ["8" x 8" paper pack","150gsm","acid and lignin free"],
      availableQuantity: 5,
      size: "8"x8"",
    },
    {
      id: "dp10",
      name: "Premium Edition Love in Paris",
      category: "designer-papers",
      seller: "Papericious",
      number: 20,
      image: "../images/love-in-paris-20.jpg",
      price: 400,
      description: ["12 x 12 inch","20 Digital Papers","Has basic shapes backgrounds : Argyle, Strips, Polka Dots, Floral and Plaid"
      ,"Great for scrapbooking, making cards, invitations, tags and photographers"],
      availableQuantity: 3,
      size: "12 x 12",
    },
    {
      id: "wt9",
      name: "Cat Washi Tape",
      category: "washi-tapes",
      seller: "Hexawata",
      number: 8,
      image: "../images/catwashitape.jpg",
      price: 640,
      description: ["Material: Paper","Width:1.5cm","Length: 10m"],
      availableQuantity: 5,
      size: "",
      colours:[],
    },
    {
      id: "wt10",
      name: "Gold Series Washi Paper Tape",
      category: "washi-tapes",
      seller: "Magideal",
      number: 10,
      image: "../images/goldentape.jpg",
      price: 720,
      description: ["Package includes 10 tapes","Made By Paper",
      "Great for beauty your photo album, books decoration of your beloved diary, notebook or other craft projects"],
      availableQuantity: 2,
      size: "",
    },
    {
      id: "cp9",
      name: "Flower Paper Punch",
      category: "craft-punches",
      seller: "SODIAL(R)",
      number: 1,
      image: "../images/flowerpunch.jpeg",
      price: 650,
      description: ["Material: ABS + Metal","Suitable for paper: 80-180g","Size: 7 x 4 x 5.6cm","Size of flower cut: about 2.3-2.5cm"],
      availableQuantity: 20,
      size: "",
    },
    {
      id: "cp10",
      name: "Cupcake Punch and Stamp",
      category: "craft-punches",
      seller: "Martha Stewart Crafts",
      number: 1,
      image: "../images/cupcakespunch.jpg",
      price: 1500,
      description: ["Product Type: Scrapbooks-Paper Punches",
      "Create meaningful memories by hand with innovative crafting essentials from lifestyle expert Martha Stewart"],
      availableQuantity: 8,
      size: "",
    },
    {
      id: "aa9",
      name: "Super Value Brush Set",
      category: "art-accessories",
      seller: "Royal and Langnickel",
      number: 10,
      image: "../images/paintbrush.jpeg",
      price: 850,
      description: ["Polymer handle, paint will not chip off like it can tend to do with a wooden handle",
      "Gold Seamless Aluminium Ferrule"],
      availableQuantity: 4,
      size: "",
    },
    {
      id: "aa10",
      name: "DIY Craft Scissors",
      category: "art-accessories",
      seller: "Wave Edge Craft",
      number: 6,
      image: "../images/craftscissors.jpg",
      price: 400,
      description: ["One lot including 6 different designs","Material: Metal and Plastic","Size: 5inch"],
      availableQuantity: 8,
      size: "",
    },
  ];

  //public
  return {

    function getCategoryList(){
      return categoryList;
    }

    function getitemList(){
      return itemList;
    }

    function getCartItemList(){
      return JSON.parse(localStorage.getItem("cartItems")) || [];
    }

    function addToCartItemList(item){
      let cartItems = getCartItemList();
      cartItems.push(item);
      localStorage.setItem("cartItems",JSON.stringify(cartItems));
    }

    function removeFromCartItemList(itemId){
      let cartItems = getCartItemList(),
          index = cartItems.findIndex((item) => {
            return (item.id == itemId);
          });
      cartItems.splice(index,1);
      localStorage.setItem("cartItems",JSON.stringify(cartItems));
    }
  }
})();
