import React, { Component } from 'react';
import emailjs from '@emailjs/browser'; // Import emailjs library
import moveImages from '../moveImages.js';
import icons from '../assets/icons.json';
import Laptop from '../assets/Laptop.png';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactIcon: icons.contactIcon,
      paperPlaneIcon: icons.paperPlane,
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using emailjs
    emailjs.sendForm(
      'service_bw1b8dp', // Replace with your emailjs service ID
      'template_qsgyx0j', // Replace with your emailjs template ID
      e.target,
      'y5xBEl9kzcHyuNWrg' // Replace with your emailjs user ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      // Clear form fields after successful submission
      this.setState({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Email send failed:', error);
    });
  };

  render() {
  const { contactIcon, paperPlaneIcon, name, email, message, } = this.state;

    return (
      <div id="kontakt" className="contactContainer container-fluid pt-5 p-5">
        <img id='paperPlane1' className='floatingIcons' src={paperPlaneIcon} />
        <img id='paperPlane2' className='floatingIcons' src={paperPlaneIcon} />
        <img id='paperPlane3' className='floatingIcons' src={paperPlaneIcon} />
        <img id='paperPlane4' className='floatingIcons' src={paperPlaneIcon} />
        <img id='paperPlane5' className='floatingIcons' src={paperPlaneIcon} />
        <div className="oceanDivider" />
        <div className="row">
          <div className="col-sm-12 p-5">
            <div className="contactTypography text-center">
              najměte mně nyní!
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-center">
            <img className='img-fluid contactIcon' src={contactIcon} />
          </div>
          <div className="col-sm-6 p-5">
          <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Vaše Jméno</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Váš Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Vaše Zpráva</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn submit-contact">Submit</button>
        </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
