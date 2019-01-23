import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="container mt-3">
      <div className="row">
        <div className="col-md-10 col-lg-9">
          {/* rubric58 - The user should see description that shows an email and phone
number for the contacting the business */}
          <h1>Contact</h1>
          <p className="lead">Need to get in touch with us?</p>
          <p>No problem. Just fill out the form below to submit your message, or use our email or phone number below to reach us.</p>
          <h3>Email</h3>
          <p><a href="mailto:contact.grocery@worldwideimporters.com">contact.grocery@worldwideimporters.com</a></p>
          <h3>Phone</h3>
          <p><strong>Local: </strong>905-121-9999</p>
          <p><strong>Toll-free: </strong>1-800-909-9099</p>
          <h3>Contact form</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;