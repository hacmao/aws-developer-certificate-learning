const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

const app = express();

const course = [
    {
        title : 'math',
        author : 'hacmao',
        description : "math"
    },
    {
        title : 'history',
        author : 'hacmao',
        description : 'history'
    }
];

const typeDefs = gql`
    input CourseInput {
        title: String,
        author: String,
        description: String
    }

    type Course {
        title: String,
        author: String,
        description: String
    }

    type Query {
        courses: [Course]
    }

    type Mutation {
        setCourse(new_course : CourseInput): Course  
    }
`;

class Course {
    constructor({ title, author, description }) {
        this.title = title;
        this.author = author;
        this.description = description;
    }
}

const resolvers = {
    Query: {
        courses: () => course
    },
    Mutation: {
        setCourse: (parent, { new_course }, { db }) => {
            db.push(new_course);
            return new Course(new_course);
        }
    }
}

const context = {
    db: course
};

const server = new ApolloServer({typeDefs, resolvers, context});

server.applyMiddleware({ app });

app.listen({ port : 4000 }, () => { 
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
