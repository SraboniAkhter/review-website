import React from 'react';

const Contact = () => {
    return (
        <div  className="container text-center mt-3">
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
          <div className="mt-2">
            <h6>Address: 74,Bhuiyan-Menson (3rd floor),Kakrail,Ramna,Dhaka-1000</h6>
            <h6>Phone: 01233344412/01822233334</h6>
            <h6>Email: studypoint@gmail.com</h6>
          </div>
        </div>
    );
};

export default Contact;