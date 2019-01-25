import React, { Component } from 'react';

class ShippingDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      province: '',
      postCode: '',
      phone: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const id = target.id;
    const value = target.value;
    this.setState({
      [id]: value
    })
  }

  // rubric51 - The checkout button should create an alert based on the users shipping details and total cost. 

  onSubmit(e) {
    e.preventDefault();
    const address = this.state.address2.length > 0 ? this.state.address1 + '\n' + this.state.address2 + '\n' : this.state.address1 + '\n';
    // rubric51 - checkout creates an alert with the cart total and shipping info
    alert('Thanks for buying from us, ' + this.state.firstName + ' ' + this.state.lastName + '!\nYour cart total is ' + this.props.total.toFixed(2) + '\nYour items will be shipped to you at \n' + address + this.state.city + '\n' + this.state.province + '\n' + this.state.postCode + '\n' + this.state.phone);
    return e;
  }
  render() {
    // rubric52 - The form should show validation errors if the form isn’t filled out correctly and the checkout button is pressed - (added the 'needs-validation' tag and hooked up required)
    return (
      // rubric48 - The user should see a form labeled “Enter Shipping Details” that
      // has text input fields for the users name, address, city, and phone
      // number. These input fields should have placeholders that show
      // what they represent. 
      <form className="needs-validation" onSubmit={this.onSubmit} id="shippingDetails">
        <fieldset disabled={this.props.disabled}>
          <p>Name</p>
          <div className="form-group">
            <label className="sr-only" htmlFor="firstName">First name</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="lastName">Last name</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Last name" required />
          </div>
        </fieldset>

        <fieldset disabled={this.props.disabled}>
          <p>Address</p>
          <div className="form-group">
            <label className="sr-only" htmlFor="address1">Address line 1</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="address1" placeholder="Address line 1" required />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="address2">Address line 2</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="address2" placeholder="Address line 2" />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="city">City</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="city" placeholder="City" required />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="province">Province</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="province" placeholder="Province" required />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="postCode">Postal code</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="postCode" placeholder="Postal code (A1B 2C3)" required />
          </div>
        </fieldset>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input onChange={this.handleChange} type="tel" className="form-control" id="phone" placeholder="Phone number" disabled={this.props.disabled} required />
        </div>
        {/* rubric50 = The user should see a checkout button */}
        <button type="submit" className="btn btn-primary" disabled={this.props.disabled}>Checkout</button>
      </form>
    );
  }
}

export default ShippingDetailsForm;