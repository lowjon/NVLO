import React from 'react'
import Product from './Product.jsx'
import NewProduct from './NewProduct.jsx'
import axios from 'axios'

// import productList from './fakeDb.js'
// import SearchBar from './SearchBar.jsx'

const submitAll = () => {}
class Inventory extends React.Component {

    constructor(props) {
        super(props)
        let location = ''
        if (this.props.location.query.location == 1) {
            location = 'Wieners'
        } else if (this.props.location.query.location == 2) {
            location = 'Waffleton'
        } else if (this.props.location.query.location == 3) {
            location = 'HQ'
        }
        this.state = {
            productList: [],
            location
        }
    }
    renderProducts() {

        if (this.state.productList.length) {
            return this.state.productList.map(product => {
                //only displays products that are at the query location and are currently active
                return (<Product key={product.id} name={product.name} quantity={product.quantity} id={product.id}/>)
            })
        }

    }

    componentWillMount() {

        axios.get(`/api/getInventory/${this.props.location.query.location}`).then((res) => {

            this.setState({productList: res.data})
        }).catch((err) => {})
    }

    componentWillUnmount() {}

    render() {
        return (
            <div className="jumbotron inventory-shell">
                <h2>{this.state.location} inventory</h2>

                <ul className='product-bundle'>
                    {this.renderProducts()}
                    <li className="list-group-item"><NewProduct/></li>
                </ul>

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
