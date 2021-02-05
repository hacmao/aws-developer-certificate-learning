import courseImg from "../img/course.png";
import { getCourse } from "../graphql/queries";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Card } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import StudentNotInCourse from './StudentNotInCourse';

const CourseDetail = ( { match }) => {
    const courseId = match.params.id;
    const [course, setCourse] = useState('');
    useEffect( () => {
        const fetch = async () => {
            try {
                const res = await API.graphql(graphqlOperation(getCourse, {id : courseId}));
                setCourse(res.data?.getCourse);
            } catch(e) {
                console.log(e);
            }
        }
        fetch();
    }, [courseId]);

    if (!course) 
        return (<p>Loading</p>);

    return(
        <div>
            <br />
            <h1>Course Detail</h1>
            <div style={{display: 'flex', paddingLeft: '40px'}}>
                <Card style={{flex: '0 0 20%', margin: "5px"}} >
                    <img src={courseImg} alt='logo' />
                </Card>    
                <div style={{paddingLeft: '100px'}}>
                    <h2>{course.name}</h2>
                    <ul>
                        <li><b>Teacher:</b> {course.teacher.name}</li>
                        <li><b>Description: </b> {course.description}</li>
                        <li><b>Number of Students: </b> {course.students.items.length} / 20</li>
                    </ul>
                </div>  
            </div>
            <h2>Add Student</h2>
            <StudentNotInCourse courseId={courseId} />
        </div>
    );
};

export default CourseDetail;