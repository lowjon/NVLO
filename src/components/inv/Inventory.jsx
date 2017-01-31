import React from 'react'
import Product from './Product.jsx'
import NewProduct from './NewProduct.jsx'
import helpers from './invHelpers.js'
import axios from 'axios'

// import productList from './fakeDb.js'
import SearchBar from './SearchBar.jsx'

const submitAll = () => {

}
class Inventory extends React.Component {


  constructor(props){
  super(props)


  this.state = {
    productList:[]
  }
  }
// constructor(props) {
//   super(props)
  // this.state = {
  //   quantity: 0
  //
  // }
  // this.handleChange = this.handleChange.bind(this)
  // this.handleSingleSubmit = this.handleSingleSubmit.bind(this)
// }



  // componentWillMount(){
  //   //call get products with the query passed in
  //   //do something
  //   // this.setState();
  //   console.log(this.props);
  // }

  renderProducts () {

    if(this.state.productList.length) {
      return this.state.productList.map(product => {
      //only displays products that are at the query location and are currently active


          return (
            <Product
            key={product.product_id}
            name={product.product_name}
            quantity={product.quantity}
            id={product.product_id} />
                )

      })
    }

  }

  componentWillMount() {
    console.log('component will mount')
    console.log(this.props.location.query.location);
    axios.get(`/api/getInventory/${this.props.location.query.location}`)
    .then((res) => {
      console.log('get from db', res.data)
      this.setState({productList:res.data})
    })
    .catch((err)=>{
      console.log('this is your problem:' + err);
    })
  }

  componentWillUnmount(){
    console.log('unmounted');
  }


  render () {
    return (
      <div className="inventory-shell">
        <h1>Welcome to the Inventory view!</h1>

        <div className='product-bundle'>
        {this.renderProducts()}
        </div>

        {/* <button onClick={submitAll()} className="btn btn-success submit-all" type="button">Submit All</button> */}

        <NewProduct />

      </div>
    )
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
