import React, { useEffect, useState } from 'react';
import DisplayTeacherData from '../DisplayTeacherData/DisplayTeacherData';
import teacherData from './../../fakeData/teacherData.json';

const TeacherData = () => {
    const [teacher,setTeacher] =useState([]);
    useEffect(() => {
        setTeacher(teacherData);
         }, [])
    return (
        <div className="row">
            
        {
      teacher.map(teacher => <DisplayTeacherData teacher={teacher} key={teacher.id}></DisplayTeacherData>)
    }
    </div>
    );
};

export default TeacherData;