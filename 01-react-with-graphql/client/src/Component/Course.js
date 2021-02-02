import React from 'react';
import {
    Card,
    Elevation,
    Button,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import GetCourses from './GetCourse'

const card_style = {
    flex: '0 0 30%',
    margin: "5px"
};

const Course = ({title, author, description}) => {
    return (
        <Card interactive={true} elevation={Elevation.TWO} style={card_style}>
            <h3><a href="#">{title}</a></h3>
            <h4>Description</h4>
            <p>Author : {author} - {description}</p>
            <Button>Join</Button>
        </Card>
    )
}

export default Course;
