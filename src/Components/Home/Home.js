import React, { useEffect, useState } from 'react';
import HomeData from '../HomeData/HomeData';
import courseData from './../../fakeData/home.json';
const Home = () => {
    const [course,setCourse] =useState([]);
    useEffect(() => {
        setCourse(courseData);
        //   console.log(courseData);
         }, [])
    return (
        <div className="row">
            
            {
          course.map(course => <HomeData course={course} key={course.id}></HomeData>)
        }
        </div>
    );
};

export default Home;