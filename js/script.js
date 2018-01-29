var categories=[
  {
    name: 'Designer Papers',
    image: '../images/designerpapers.jpg',
  },
  {
    name: 'Craft Punches',
    image: '../images/craftpunches.jpg',
  },
  {
    name: 'Washi Tapes',
    image: '../images/washitape.jpg',
  },
  {
    name: 'Art Accessories',
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
  },
  {
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
  },
  {
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
  },
  {
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
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
  },{
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
    name: 'DIY Craft Scissors',
    category: 'art-accessories',
    seller: 'Wave Edge Craft',
    number: 6,
    image: '../images/craftscissors.jpg',
    price: 400,
    description: ['One lot including 6 different designs','Material: Metal and Plastic','Size: 5inch'],
    availableQuantity: 8,
    size: '',
  }
];

var cartItems=[
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
    categoryNode.setAttribute("onclick","displayCategoryItems(this)");
    categoryNode.innerHTML = `
      <img class ="category-image" src=${category.image} alt="${category.name}">
      <div class="category-name"> ${category.name} </div>
    `;
    categoryList.appendChild(categoryNode);
  });
}

function displayCategoryItems(ele){
  var category = ele.getElementsByClassName('category-name')[0].innerHTML.toString().trim();
  window.location.href = "itemlist.html?category="+category;
}

function displayItems(){
  displayCartCount();
  var category = document.URL.substring(document.URL.indexOf("category=")+"category=".length).replace(/%20/g,' ');
  if(category.includes("#")){
    category = category.substring(0,category.indexOf("#"));
  }
  document.getElementById('menu-title').innerHTML = category;
  var categoryName = category.replace(/ /g,'-').toLowerCase();
  var itemList = document.getElementById('item-list');
  items.forEach((item) => {
    if(item.category == categoryName){
      var itemNode = document.createElement("div");
      itemNode.setAttribute("onclick","openPopup(this)");
      itemNode.setAttribute("class","item");
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
  var itemElementName = ele.closest('.item').getElementsByClassName('item-name')[0].innerHTML;
  var index =0;
  while(index < items.length){
    if(itemElementName == items[index].name){
      break;
    }
    index++;
  }
  var popupDetailsNode = document.getElementById('popup-item-details');
  var imageNode = document.createElement("img");
  imageNode.setAttribute("class","popup-item-image");
  imageNode.setAttribute("src",items[index].image);
  imageNode.setAttribute("alt",items[index].name);
  var textNode  =document.createElement("div");
  textNode.setAttribute("class","popup-item-text");
  var htmlText =`
    <div class="popup-item-name">${items[index].name}</div>
    <div class="popup-item-seller">${items[index].seller}</div>
    <div>
      <ul class="popup-item-description">`;
  items[index].description.forEach((element) => {
    var listNode = document.createElement("li");
    listNode.innerHTML = element;
    htmlText += listNode.outerHTML;
  })
  htmlText +=`</ul>
    </div>
    <div class="popup-item-price">Price: Rs. ${items[index].price}</div>`;
  textNode.innerHTML = htmlText;
  popupDetailsNode.appendChild(imageNode);
  popupDetailsNode.appendChild(textNode);
  window.location.href = "#popupbox";
}

function removePopupChildren(){
  var popupDetailsDiv = document.getElementById('popup-item-details');
  while (popupDetailsDiv.hasChildNodes()) {
      popupDetailsDiv.removeChild(popupDetailsDiv.firstChild);
  }
}

function incrementCartCount(ele){
  // var countElement =  document.getElementById('cart-items-count');
  // var count = parseInt(countElement.innerHTML);
  // countElement.innerHTML = count + 1;
  var itemName = ele.closest('.popup').getElementsByClassName('popup-item-name')[0].innerHTML;
  var index =0;
  while(index < items.length){
    if(itemName == items[index].name){
      break;
    }
    index++;
  }
  cartItems.push(items[index]);
  displayCartCount();
  window.location.href = "#!";
  removePopupChildren();
}

function displayCartItems(){
  displayCartCount();
  var cartTableBody = document.getElementById('cart-table-body');
  cartItems.forEach((item) => {
    var tableRow = document.createElement("tr");
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
  ele.closest('tr').parentNode.removeChild(parentRow);
  //remove from cartItems;
  updateCartDetails();
}

function updatePrice(ele){
  var parentRow = ele.closest('tr');
  var itemName = parentRow.getElementsByClassName('cart-item-name')[0].innerHTML.toString();
  if(ele.value <= 0){
    ele.value = 1;
  }
  var index =0;
  while(index < items.length){
    if(itemName.toLowerCase() == items[index].name.toLowerCase()){
      break;
    }
    index++;
  }
  if(ele.value > items[index].availableQuantity){
    alert('You have reached maximum available quantity!');
    ele.value = items[index].availableQuantity;
  }
  parentRow.getElementsByClassName('cart-item-price')[0].innerHTML = ele.value * items[index].price;
}

document.addEventListener('input',function(e){
  updatePrice(e.target);
  updateCartDetails();
},false);
