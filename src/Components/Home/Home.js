import React, { useEffect, useState } from 'react';
import HomeData from '../HomeData/HomeData';
import courseData from './../../fakeData/home.json';
import image from '../image/Study-Group-web.jpeg'
const Home = () => {
    const [course,setCourse] =useState([]);
    useEffect(() => {
        setCourse(courseData);
        //   console.log(courseData);
         }, [])
    return (
        <div className="container">

            {/* extra home section */}
            <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>OPEN THE WORLD OF OPPORTUNISTS</h5>
        <p>Every year, we change the lives of millions of students. We enable them to explore all their study options in one place and to find the best fit study programme that matches their needs, goals, and preferences.</p>
      </div>
      </div>
    </div>
</div>
</div>


      <div className="row">
          <h2 className="text-center mt-4">Our Courses</h2>
            
            {
          course.map(course => <HomeData course={course} key={course.id}></HomeData>)
        }
        </div>
        </div>
    );
};

export default Home;