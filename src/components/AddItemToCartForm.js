import React, { Component } from 'react';

class AddItemToCartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ quantity: parseInt(e.target.value) });
  }

  onSubmit(e) {
    console.log('product add item form', this.props.item);
    this.props.onCartAddItem({
      name: this.props.item.name,
      quantity: this.state.quantity,
      item: this.props.item
    });
    e.preventDefault();
  } onSubmit

  render() {
    return (
      <form className="form-inline product-page__add-to-cart-form mb-4 needs-validation">
        <label htmlFor="itemQuantity">Quantity: </label>
        <input onChange={this.handleChange} className="form-control ml-2 mr-3" id="itemQuantity" type="number" min="1" max={this.props.item.stock} defaultValue="1" required />
        <button onClick={this.onSubmit} className="btn btn-primary">Add to cart</button>
      </form>
    );
  }
}

export default AddItemToCartForm;