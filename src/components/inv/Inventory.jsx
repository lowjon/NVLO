import React from 'react'
import Product from './Product.jsx'
import NewProduct from './NewProduct.jsx'
import helpers from './invHelpers.js'
import axios from 'axios'

import productList from './fakeDb.js'


const submitAll = () => {

}

class Inventory extends React.Component {


  //constructor(props){
  // super(props)
  // axios.get(`localhost:8080/api/getInventory/${this.props.location.query.location}`)
  // .then((res)=> {
  //   console.log(res);
  // })
  // .catch((err)=>{
  //   console.log('this is your problem:' + err);
  // })
  // this.state = {
  //
  // }
  //}
  componentWillMount(){
    //call get products with the query passed in
    //do something
    // this.setState();
    console.log(this.props.location.query.location);
  }

  renderProducts () {
    return productList.map(product => {
      if(product.location === this.props.location.query.location){
        return (<Product key={product.product_id} name={product.product_name} quantity={product.quantity}/>)
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Welcome to the Inventory view!</h1>
        {this.renderProducts()}

        <button onClick={submitAll()} className="btn btn-success" type="button">Submit All</button>

        <NewProduct />

      </div>
    )
  }

  componentDidMount() {
    console.log('component did mount')
  }

  componentWillUnmount(){
    console.log('unmounted');
  }

}

export default Inventory
