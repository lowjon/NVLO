import React from 'react'
import {Link} from 'react-router'

class NewProduct extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Product name" />
        <Link className="btn btn-primary">Add Item</Link>
      </div>
    )
  }
}

export default NewProduct
