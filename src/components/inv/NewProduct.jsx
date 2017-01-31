import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'
const addInvItem = () => {
  //do somthing here that will add a new product obj to the productList array
  //it needs to use the data from the inputs

}

class NewProduct extends React.Component {
  render() {
    return (
      <form>
        <input id="newName" type="text" placeholder="Product name" />
        {' '}
        <input id="newLocation" type="text" placeholder="Location" />
        {' '}
        <input id="supplier" type="text" placeholder="Supplier" />
        {' '}
        <Link onClick={addInvItem()} className="btn btn-primary">Add Item</Link>
      </form>
    )
  }
}

export default NewProduct
