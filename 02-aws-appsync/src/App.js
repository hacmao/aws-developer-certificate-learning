import './App.css';
import awsconfig from './aws-exports.js'
import Amplify, { Auth } from 'aws-amplify';
import Nav from './component/Nav'
import Home from "./component/Home";
import CourseDetail from "./component/CourseDetail";
import { BrowserRouter as Router, Route } from 'react-router-dom';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Course/:id" component={CourseDetail} />
    </Router>
  )
}

export default App;
