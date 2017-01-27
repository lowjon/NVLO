import React from 'react'
import {Link} from 'react-router'
import './fakeDb'

const addInvItem = () => {
  //do somthing here that will add a new product obj to the productList array
  //it needs to use the data from the inputs
  
}

class NewProduct extends React.Component {
  render() {
    return (
      <div>
        <input id="newName" type="text" placeholder="Product name" />
        <input id="newLocation" type="text" placeholder="Location" />
        <Link onClick={addInvItem()} className="btn btn-primary">Add Item</Link>
      </div>
    )
  }
}

export default NewProduct
