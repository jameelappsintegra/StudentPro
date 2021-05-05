import React from 'react';
import Card from '../components/Card'

const StudentList = () => {
    return (
        <div className="student-grid">
            {
                data.map((i) => {
                    return (
                        <Card

                            isStudentList={true}
                            id={i.id}
                            name={i.name}
                            roll={i.roll}
                            class={i.class}
                            fromYear={i.year.from}
                            toYear={i.year.to}
                        />
                    )
                })
            }
        </div>
    )
}

const data = [
    {
        "id": "1",
        "img": "",
        "name": "Hind Khamis",
        "class": "VI",
        "roll": "02",
        "admissionDate": "20-Apr-2016",
        "bloodGroup": "o+",
        "gender": "Male",
        "status": "Active",
        "Adress": "Dubai",
        "dob": "19-Apr-2018",
        "gpa": "80",
        "year": {
            "from": "2020",
            "to": "2021"
        },
        "attandance": [
            {
                "start": "10-Apr-2005",
                "end": ""
            }
        ]
    },
    {
        "id": "2",
        "img": "",
        "name": "Mohamed Obaid",
        "class": "V",
        "roll": "03",
        "admissionDate": "20-Apr-2016",
        "bloodGroup": "o+",
        "gender": "Male",
        "status": "Active",
        "Adress": "Dubai",
        "dob": "19-Apr-2018",
        "gpa": "80",
        "year": {
            "from": "2020",
            "to": "2003"
        },
        "attandance": [
            {
                "start": "10-Apr-2005",
                "end": ""
            }
        ]
    },
    {
        "id": "3",
        "img": "",
        "name": "Meera Salem",
        "class": "III",
        "roll": "01",
        "admissionDate": "20-Apr-2016",
        "bloodGroup": "o+",
        "gender": "Male",
        "status": "Active",
        "Adress": "Dubai",
        "dob": "19-Apr-2018",
        "gpa": "80",
        "year": {
            "from": "2019",
            "to": "2020"
        },
        "attandance": [
            {
                "start": "10-Apr-2005",
                "end": ""
            }
        ],
    },
]

export default StudentList;