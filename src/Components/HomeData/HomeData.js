import React from 'react';

const HomeData = (props) => {
    const {name,img,detail,price} = props.course
    return (
        <div className="col-md-6 mt-4 mb-5">
        <div class="card h-100 ">
          <img style={{ height:'150px'}} src={img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{detail}</p>
          </div>
          <div class="card-footer">
            <small class="fw-bolder me-4">Price: $ {price}</small>
            <small class="fw-bolder"><button class="btn btn-dark">buy course</button></small>
          </div>
        </div>
        </div>
    );
};

export default HomeData;