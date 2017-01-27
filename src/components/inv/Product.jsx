import React from 'react'
import {Link} from 'react-dom'


const updateQuantity = () => {

}

class Product extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <p>{this.props.name} quantity: {this.props.quantity}</p>
        <form className="inv-input">
          <input
            type="number"
            name="quantity"
            min="0"/>
            <button className="btn btn-danger" type="button" onClick={updateQuantity()}>submit</button>
        </form>
      </div>
    )
  }
}

export default Product
