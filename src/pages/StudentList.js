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
        "img": "",
        "name": "Hind Khamis",
        "class": "VI",
        "roll": "02",
        "year": {
            "from": "2020",
            "to": "2021"
        }

    },
    {
        "img": "",
        "name": "Mohamed Obaid",
        "class": "V",
        "roll": "03",
        "year": {
            "from": "2020",
            "to": "2003"
        }

    },
    {
        "img": "",
        "name": "Meera Salem",
        "class": "III",
        "roll": "01",
        "year": {
            "from": "2019",
            "to": "2020"
        }

    },
]

export default StudentList;