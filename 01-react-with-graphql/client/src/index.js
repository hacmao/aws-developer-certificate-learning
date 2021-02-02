import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Card,
  Elevation,
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Classes
} from "@blueprintjs/core";

import "@blueprintjs/core/lib/css/blueprint.css";

ReactDOM.render(
  <React.StrictMode>
  {/* <div style={{display: "flex", flexDirection: 'col', flexWrap: "wrap", justifyContent: "center",paddingRight: '20px'}}>
      <Card interactive={true} elevation={Elevation.TWO} style={{maxWidth: "30%",flex: "1",margin: "5px",}}>
      <h5><a href="#">Card heading</a></h5>
      <p>Card content</p>
      <Button>Submit</Button>
  </Card>
  <Card interactive={true} elevation={Elevation.TWO} style={{maxWidth: "30%",flex: "1",margin: "5px",}}>
      <h5><a href="#">Card heading</a></h5>
      <p>Card content</p>
      <Button>Submit</Button>
  </Card>
  <Card interactive={true} elevation={Elevation.TWO} style={{maxWidth: "30%",flex: "1",margin: "5px",}}>
      <h5><a href="#">Card heading</a></h5>
      <p>Card content</p>
      <Button>Submit</Button>
  </Card> */}
   {/* <div>
    <Navbar style={{color:"blue"}}>
      <NavbarGroup>
        <NavbarHeading>Hacmao</NavbarHeading>
        <NavbarDivider/>
        <Button minimal={true} text='Home' />
        <Button minimal={true} text='Add' />
      </NavbarGroup>
    </Navbar> */}
     <App />
  {/* // </div>  */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
