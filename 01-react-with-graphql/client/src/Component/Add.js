import React, { useState } from 'react';
import { useMutation, ApolloProvider } from '@apollo/client';
import { Button, FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import { ADD_COURSE } from '../graphql/addCourse';

const input_style = {
    width: '33%',
}
 
const Add = ({ client }) => {
    const [course, setCourse] = useState({});
    const [ref, setRef] = useState([]);
    const [ addCourse, { data }] = useMutation(ADD_COURSE);
    
    const addRef = (type, e) => {
        ref[type] = e;
        setRef(ref);
    }

    const handleChange = (type, value) => {
        course[type] = value;
        setCourse(course);
        console.log(course);
    }

    return (
        <div style={{ paddingLeft: '20px' }}>
            <h2> Add course </h2>
            <FormGroup label='Title' labelFor='title' >
                <InputGroup 
                    id='title' 
                    style={input_style} 
                    placeholder='title' 
                    intent={Intent.PRIMARY}
                    onChange={(event) => handleChange(event.target.id, event.target.value)}
                />
            </FormGroup>
            <FormGroup label='Author' labelFor='author' >
                <InputGroup 
                    id='author' 
                    style={input_style} 
                    placeholder='author' 
                    intent={Intent.PRIMARY}
                    onChange={(event) => handleChange(event.target.id, event.target.value)}
                />
            </FormGroup>
            <FormGroup label='Description' labelFor='description' >
                <InputGroup 
                    id='description' 
                    style={input_style} 
                    placeholder='description' 
                    intent={Intent.PRIMARY}
                    onChange={(event) => handleChange(event.target.id, event.target.value)}
                />
            </FormGroup>
            <ApolloProvider client={client} >
                <Button
                    text='ADD'
                    icon='small-plus'
                    intent={Intent.PRIMARY}
                    onClick={(e) => {
                        e.preventDefault();
                        addCourse({ variables : course });
                        Array.from(document.querySelectorAll("input")).forEach(
                            input => (input.value = "")
                        );
                    }}
                />
            </ApolloProvider>
            
        </div>
    )

}

export default Add;