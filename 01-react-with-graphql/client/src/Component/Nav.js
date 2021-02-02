import React from 'react';
import {
    Button,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    NavbarDivider
} from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import "@blueprintjs/core/lib/css/blueprint.css";

const Nav = () => {
    return (
        <div style={{paddingBottom: '20px'}}>
            <Navbar style={{color:'blue'}}>
                <NavbarGroup>
                    <NavbarHeading>Hacmao</NavbarHeading>
                    <NavbarDivider/>
                    <Link to='/Home' >
                        <Button minimal={true} text='Home' />
                    </Link>
                    <Link to='/Add' >
                        <Button minimal={true} text='Add' />
                    </Link>
                    
                </NavbarGroup>
            </Navbar>
        </div>
        
    );
}

export default Nav;