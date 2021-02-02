import React from 'react';
import { ApolloProvider } from '@apollo/client';
import GetCourses from './GetCourse'

const style = {
    display: 'flex',
    flexDirection: 'col',
    flexWrap: 'wrap',
    paddingLeft: '40px',
    flexBasis: '33.333333%'
};

const Home = ({ client }) => {
    return (
        <div style={{ paddingLeft: '20px' }}>
            <h2>List Course</h2>
            <div style={style}>
                <ApolloProvider client={client}>
                    <GetCourses />
                </ApolloProvider>
            </div>
        </div>
    )
}

export default Home;