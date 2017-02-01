import React from 'react'
import {Link} from 'react-dom'
import axios from 'axios'

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.quantity,
            product_id: this.props.id
        }
        this.updateQuantity = this.updateQuantity.bind(this)
    }

    componentDidMount() {}

    updateQuantity() {
        let v = document.getElementById(this.props.name).value
        let itemId = this.state.product_id
        axios.put(`/api/inventory/${itemId}`, {quantity: v}).then((response) => {
        })
        this.setState({quantity: v})
    }

    render() {
        return (
                <li className="list-group-item product-item">
                    <h3><span className="badge badge-info" >{this.props.name} -- {this.state.quantity}</span></h3>
                    <form className="inv-input">
                        <input type="number" name="quantity" min="0" placeholder="current #" id={this.props.name}/> {' '}
                        <button className="btn btn-outline-danger" type="button" onClick={this.updateQuantity}>update</button>
                    </form>
                </li>

        )
    }
}

export default Product
