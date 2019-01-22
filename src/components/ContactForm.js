import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      subject: "",
      message: null
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

  // rubric60 - The send button should create an alert based on the message sent 
  onSubmit(e) {
    e.preventDefault();
    alert(
      "Thank you for your feedback, " + this.state.name + ".\n" +
      "We've received the following message from you in regards to the subject of " + this.state.subject + ":\n" +
      this.state.message +
      "\n We will review your message in the next two business days and respond to you with an email sent to " + this.state.email + ".\nThank you for shopping with WorldWideImporters!"
    );
    return e;
  }

  render() {
    return (
      <article className="row">
        {/* rubric57 - The user should see a form with text input fields for name and
            email, a dropdown list for subject, and a text area for a message.
            These fields should have placeholders to show what they
            represent */}
        {/* rubric61 - The form should show validation errors if the form isn’t filled out
correctly and the send button is pressed  */}
        <form onSubmit={this.onSubmit} className="needs-validation col-md-10 col-lg-8">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="Full name" autoComplete="on" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange={this.handleChange} type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete="on" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select onChange={this.handleChange} className="form-control" id="subject" value={this.state.subject} required>
              <option value="" disabled>Select a subject</option>
              <option value="Website feedback">Website feedback</option>
              <option value="Information correction">Information correction</option>
              <option value="Shipping inquiry">Shipping inquiry</option>
              <option value="Complaint">Complaint</option>
              <option value="General feedback">General feedback</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea onChange={this.handleChange} className="form-control" id="message" rows="5" required></textarea>
          </div>
          {/* rubric59 - The user should see a button labeled “Send” */}
          <button type="submit" className="btn btn-primary float-right float-sm-none">Send</button>
        </form>
      </article>
    );
  }
}

export default ContactForm;