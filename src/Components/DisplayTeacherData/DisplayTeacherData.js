import React from 'react';

const DisplayTeacherData = (props) => {
    const {name,img,detail,subject} = props.teacher
    return (
        <div className="col-md-3 mb-5">
        <div class="card h-100 ">
          <img style={{ height:'150px'}} src={img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">lecturer of: {subject}</p>
            <p class="card-text">{detail}</p>
          </div>
        </div>
        </div>
    );
};

export default DisplayTeacherData;