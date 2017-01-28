import React from 'react'
import Product from './Product.jsx'
import NewProduct from './NewProduct.jsx'
import helpers from './invHelpers.js'
import axios from 'axios'

import productList from './fakeDb.js'
import SearchBar from './SearchBar.jsx'

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
constructor(props) {
  super(props)
  // this.state = {
  //   quantity: 0
  //
  // }
  // this.handleChange = this.handleChange.bind(this)
  // this.handleSingleSubmit = this.handleSingleSubmit.bind(this)
}



  componentWillMount(){
    //call get products with the query passed in
    //do something
    // this.setState();
    console.log(this.props);
  }

  renderProducts () {
    return productList.map(product => {
    //only displays products that are at the query location and are currently active
      if(product.location === this.props.location.query.location){
        console.log(product.quantity);
        return (<Product key={product.product_id} name={product.product_name} quantity={product.quantity}/>)
      }
    })
  }


  render () {
    return (
      <div>
        <h1>Welcome to the Inventory view!</h1>

        {this.renderProducts()}

        <button onClick={submitAll()} className="btn btn-success submit-all" type="button">Submit All</button>

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

// class ToggleAcive extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {show_active: true}
//     this.handleToggleActive = this.handleToggleActive.bind(this);
//   }
//
//   handleToggleActive (event) {
//     this.setState({show_active: event.target.show_active})
//     console.log('state changed to' + event.target.show_active);
//   }
//
//
//   render () {
//     return(
//       <input type="checkbox">Hide inactive items</input>
//     )
//   }
//
// }


export default Inventory
