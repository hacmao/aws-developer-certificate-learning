import { listCourses } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { Card, Elevation } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import { useHistory } from "react-router-dom";

const card_style = {
    flex: '0 0 30%',
    margin: "5px"
};

const ListCourse = () => {
    const history = useHistory();
    const [courses, setCourses] = useState('');

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await API.graphql(graphqlOperation(listCourses));
                setCourses(res.data.listCourses.items);
            } catch(e) {
                console.log(e);
            }
        }

        fetch();
    }, []);

    if (courses) {
        return courses.map(({ id, name, students, teacher, description}) => {
            return (
                <Card 
                    interactive={true} 
                    elevation={Elevation.TWO} 
                    style={card_style} 
                    key={id}
                    onClick={() => { history.push(`/Course/${id}`); } }
                >
                    <h3><a href='/'>{name}</a></h3>
                    <p>Teacher : {teacher.name}</p>
                    <p>Description: {description}</p>
                    <p>Studens enroll: {students.items.length}</p>
                </Card>
            );
        })
    }
    else {
        return (<p>Loading</p>);
    }
}

export default ListCourse;