import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'
const addInvItem = () => {
    //do somthing here that will add a new product obj to the productList array
    //it needs to use the data from the inputs

}

class NewProduct extends React.Component {
    constructor(props) {
        super(props)
        this.addInvItem = this.addInvItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    addInvItem() {

        axios.put('/api/inventory/new_item', {
            name: this.state.name,
            location: this.state.location,
            supplier: this.state.theSupplier
        }).then(() => {
          console.log('thats nice');
        })
    };

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state);


    }

    render() {
        return (
            <form>
                <input name='name' onChange={this.handleChange} type="text" placeholder="Product name"/> {' '}
                <input name='location' onChange={this.handleChange} type="text" placeholder="Location"/> {' '}
                <input name='theSupplier' onChange={this.handleChange} type="text" placeholder="Supplier"/> {' '}
                <button onClick={this.addInvItem} className="btn btn-primary">Add Item</button>
            </form>
        )
    }
}

export default NewProduct
