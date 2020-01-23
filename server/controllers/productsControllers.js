const productsController = {};


productsController.readProducts = (req, res, next) => {
  console.log('products controller middleware is HOT!!!!');
  const products = [
    {
      itemName: 'Handmade Pashmina',
      image: 'https://www.ukpashmina.co.uk/user/products/large/raspberry-50-cashmere-silk-pashmina.jpg',
      description: "This is a Pagmina, isn't it cute?",
      price: '$55',
    },
    {
      itemName: 'Beautiful Handwoven Pillow',
      image: 'https://cdn.shopify.com/s/files/1/0125/8122/products/moons_pillow_blush_gold_d1169be0-439b-4669-b817-8d843b0873a7_800x800@2x.jpg?v=1577376405',
      description: "This is a beautiful handmade pillow, doesn't it make you want to lay your head on it?",
      price: '$45',
    },
    {
      itemName: 'Handmade Purse',
      image: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2017/07/04/595be64d2599fe31810156d1/m_595be6814225be906a015edc.jpg',
      description: 'A carefully crafted purse to gently hold your eseentials with care!',
      price: '$70',
    },
    {
      itemName: 'A colorful Handbag',
      image: 'https://di2ponv0v5otw.cloudfront.net/posts/2018/07/15/5b4bc3a3534ef9cd48a23d44/m_5b4bc490aa8770337728f1b0.jpg',
      description: 'Brings out the brightness in you with a colorful vibe',
      price: '$69',
    },
    {
      itemName: 'Super Cute Beanies',
      image: 'https://i.etsystatic.com/12389195/r/il/67642d/1337525866/il_fullxfull.1337525866_hyiy.jpg',
      description: "It's super cold these days! Stay warm with extra warmth on your head",
      price: '$25',
    },
    {
      itemName: 'Hand Crochet Baby Beenie',
      image: 'https://cdn.shopify.com/s/files/1/2162/1429/products/beanie_900x.jpg?v=1501633528',
      description: "You're going to keep dreaming about this if you don't get it, you know you'll do",
      price: '$28',
    },
  ];

  res.locals.products = products;
  next();
};

module.exports = productsController;
