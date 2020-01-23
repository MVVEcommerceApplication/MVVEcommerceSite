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
    this.state = [];
  }


  componentDidMount() {
    // create function poll database
    // inject hydrate store into db Poll
    fetch('/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((productsFromDatabase) => {
        console.log('EXPRESS PRODUCTS', productsFromDatabase);
        this.props.hydrateStore(productsFromDatabase);
      })
      .catch((err) => console.log('failed request', err));
  }


  render() {
    // // map products in state to homepage
    const display = [];
    // grab length of array of objects in state
    const lenOfObjectsInState = this.props.store.products.length;
    for (let i = 0; i < lenOfObjectsInState; i += 1) {
      const curr = this.props.store.products[i];
      display.push(
        <ProductInfo image={curr.image} itemName={curr.itemName} description={curr.description} price={curr.price} key={i} />,
      );
    }
    // map products in state to homepage
    // const display = [];
    // // grab length of array of objects in state
    // const lenOfObjectsInState = this.state.length;
    // for (let i = 0; i < lenOfObjectsInState; i += 1) {
    //   const curr = this.state[i];
    //   display.push(
    //     <ProductInfo image={curr.image} itemName={curr.itemName} description={curr.description} price={curr.price} key={i} />,
    //   );
    // }
    return (
      <div id="MainBodyContainer">
        <h1>Home</h1>
        {/* render item to display */}
        {display}
      </div>

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
