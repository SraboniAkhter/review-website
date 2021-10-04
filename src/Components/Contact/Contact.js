import React from 'react';

const Contact = () => {
    return (
        <div  className="container text-center">
          <h3>CONNECT WITH US</h3>
          <h6>Get updates on sales, specials and more</h6>
          <label for="fname">Your Name</label>
          <br />
          <input type="text" placeholder="Enter your name"/>
          <br />
          <label for="fname">Message</label>
          <br />
        <textarea style={{ height:'150px'}} id="subject" name="subject" placeholder="Write something.." ></textarea>
        <br />
          <button type="button" className="btn btn-dark">SUBMIT</button>
        </div>
    );
};

export default Contact;