import React from 'react'
import '../stylesheets/Contact.css';
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8a5343b0-276d-44c9-84cd-9f73f2cd7c49");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "<h2>THANK YOU!!</h2><h6><i>Your Message has been sent.</i></h6>",
        icon: "",
        draggable: true
      });
    }
  };

  return (
    <section className='contact'>
        <form onSubmit={onSubmit} className='fcont'>
            <h2>Contact Form</h2>
            <div className='cinput-box'>
                <label>Full Name</label>
                <input type="text" className='field' placeholder='Enter Your Name' name='name' autoComplete='off' required /> 
            </div>
            <div className='cinput-box'>
                <label>Email Address</label>
                <input type="email" className='field' placeholder='Enter Your Email' name='email' autoComplete='off' required /> 
            </div>
            <div className='cinput-box'>
                <label>Your Message</label>
                <textarea name="message"  className='field Message' placeholder='Enter Your Message' autoComplete='off' required></textarea>
             </div>
             <button type="submit">Send Message</button>
        </form>
    </section>
  )
}

export default Contact
