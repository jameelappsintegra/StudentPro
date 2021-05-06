import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card'
import { GET_ALL_STUDENTLIST } from "./graphql";

const StudentList = () => {

    const { data: studentList } = useQuery(GET_ALL_STUDENTLIST);
    const [studentListItems, setStudentListItems] = useState([]);

    useEffect(() => {
        if (studentList) {
            setStudentListItems(studentList.student);
        }
    }, [studentList]);

    console.log(studentListItems);
    return (
        <div className="student-grid">
            {
                studentListItems && studentListItems.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            isStudentList={true}
                            id={item.id}
                            name={item.student_name}
                            roll={item.roll}
                            class={item.class}
                            fromYear={item.from_year}
                            toYear={item.to_year}
                        />
                    )
                })
            }
        </div>
    )
}

export default StudentList;