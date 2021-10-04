import React, { useEffect, useState } from 'react';
import CourseData from '../CourseData/CourseData';
import courseData from './../../fakeData/data.json';
const Course = () => {
    const [course,setCourse] =useState([]);
    useEffect(() => {
        setCourse(courseData);
        //   console.log(courseData);
         }, [])
    return (
        <div className="row">
            
            {
          course.map(course => <CourseData course={course} key={course.id}></CourseData>)
        }
        </div>
    );
};

export default Course;