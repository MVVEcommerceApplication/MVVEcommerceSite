import React, { Component } from 'react';
import ProductInfo from './ProductInfoComponent.jsx';

// eslint-disable-next-line arrow-body-style
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        name: 'Handmade Pashmina',
        image: 'https://www.ukpashmina.co.uk/user/products/large/raspberry-50-cashmere-silk-pashmina.jpg',
        description: "This is a Pagmina, isn't it cute?",
        price: '$55',
      },
      {
        name: 'Beautiful Handwoven Pillow',
        image: 'https://cdn.shopify.com/s/files/1/0125/8122/products/moons_pillow_blush_gold_d1169be0-439b-4669-b817-8d843b0873a7_800x800@2x.jpg?v=1577376405',
        description: "This is a beautiful handmade pillow, doesn't it make you want to lay your head on it?",
        price: '$45',
      },
      {
        name: 'Handmade Purse',
        image: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2017/07/04/595be64d2599fe31810156d1/m_595be6814225be906a015edc.jpg',
        description: 'A carefully crafted purse to gently hold your eseentials with care!',
        price: '$70',
      },
      {
        name: 'A colorful Handbag',
        image: 'https://di2ponv0v5otw.cloudfront.net/posts/2018/07/15/5b4bc3a3534ef9cd48a23d44/m_5b4bc490aa8770337728f1b0.jpg',
        description: 'Brings out the brightness in you with a colorful vibe',
        price: '$69',
      },
      {
        name: 'Super Cute Beanies',
        image: 'https://i.etsystatic.com/12389195/r/il/67642d/1337525866/il_fullxfull.1337525866_hyiy.jpg',
        description: "It's super cold these days! Stay warm with extra warmth on your head",
        price: '$25',
      },
      {
        name: 'Hand Crochet Baby Beenie',
        image: 'https://cdn.shopify.com/s/files/1/2162/1429/products/beanie_900x.jpg?v=1501633528',
        description: "You're going to keep dreaming about this if you don't get it, you know you'll do",
        price: '$28',
      },
    ];
  }

  render() {
    const styles = {
      container: {
        border: '1px black solid',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      },
    };
    const display = [];
    // console.log(this.state[0].name);
    let curr;
    for (let i = 0; i < this.state.length; i += 1) {
      curr = this.state[i];
      display.push(
        // <div key={curr.image} className="productImage">
        //   {' '}
        //   {curr.image}
        //   {' '}
        // </div>,
        // <div key={curr.name} className="productName">
        //   {' '}
        //   {curr.name}
        // </div>,
        // <div key={curr.description} className="productDescription">
        //   {' '}
        //   {curr.description}
        //   {' '}
        // </div>,
        // <div key={curr.price} className="productPrice">
        //   {curr.price}
        //   {' '}
        // </div>,
        // eslint-disable-next-line max-len
        <ProductInfo image={curr.image} name={curr.name} description={curr.description} price={curr.price} key={i} />,
        // console.log('This is the current name ', curr.image),

      );
      // console.log(display);
    }
    return (
      <div>

        {display}
      </div>

    );
  }
}


export default Home;
