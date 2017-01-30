import React from 'react'
import {Link} from 'react-dom'




class Product extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.quantity
    }
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  componentDidMount() {
  }

updateQuantity() {
  let v = document.getElementById(this.props.name).value
  console.log(v);
  this.setState({
    quantity: v
  })
}

  render () {
    return (
      <div className="product-item">
        <p>{this.props.name} : {this.state.quantity}</p>
        <form className="inv-input">
          <input
            type="number"
            name="quantity"
            min="0"
            placeholder="current #"
            id={this.props.name}
          />
            {' '}
            <button className="btn btn-danger" type="button" onClick={this.updateQuantity}>update</button>
        </form>
      </div>
    )
  }
}

export default Product
