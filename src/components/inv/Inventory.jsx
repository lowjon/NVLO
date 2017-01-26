import React from 'react'
import Product from './Product.jsx'
import NewProduct from './NewProduct.jsx'

class Inventory extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to the Inventory view!</h1>
        <Product />
        <NewProduct />

      </div>
    )
  }

}

export default Inventory
