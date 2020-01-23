import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductInfo from './product/ProductInfoComponent.jsx';

import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  // add pertinent state here
  // someData
  // quantity: state.quantity,
  ...state,
});
  // const mapStateToProps = (state) => {
  //   console.log('im the state:', state);
  //   return { foo: state.store.quantity };
  // };
const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  addQuantity: () => dispatch(actions.addQuantity()),
  hydrateStore: (productsFromDb) => dispatch(actions.hydrateStore(productsFromDb)),
});

// eslint-disable-next-line arrow-body-style
class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = [];
    this.state = [
      {
        itemName: 'Handmade Pashmina',
        image: 'https://www.ukpashmina.co.uk/user/products/large/raspberry-50-cashmere-silk-pashmina.jpg',
        description: "PURL Pagmina, isn't it cute?",
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
  }


  componentDidMount() {
    // create function poll database
    // inject hydrate store into db Poll
    // fetch('/products', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((productsFromDatabase) => {
    //     console.log('EXPRESS PRODUCTS', productsFromDatabase);
    //     this.props.hydrateStore(productsFromDatabase);
    //   })
    //   .catch((err) => console.log('failed request', err));
  }


  render() {
    // // map products in state to homepage
    // const display = [];
    // // grab length of array of objects in state
    // const lenOfObjectsInState = this.props.store.products.length;
    // for (let i = 0; i < lenOfObjectsInState; i += 1) {
    //   const curr = this.props.store.products[i];
    //   display.push(
    //     <ProductInfo image={curr.image} name={curr.itemName} description={curr.description} price={curr.price} key={i} />,
    //   );
    // }
    // map products in state to homepage
    const display = [];
    // grab length of array of objects in state
    const lenOfObjectsInState = this.state.length;
    for (let i = 0; i < lenOfObjectsInState; i += 1) {
      const curr = this.state[i];
      display.push(
        <ProductInfo image={curr.image} itemName={curr.itemName} description={curr.description} price={curr.price} key={i} />,
      );
    }
    return (
      <div>
        <h1>Home</h1>
        {/* render item to display */}
        {display}
      </div>

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
