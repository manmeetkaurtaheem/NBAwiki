import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import './button.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Games from './games';
import Teams from './teams';
class Button1 extends Component
{
    state ={ }
    render()
    {
        return(
            <Router>
                <div>
                    <Button className="btngrp1" varient="outline-primary" toggle href="/teams">NBA TEAMS</Button>
                    <Button className="btngrp1" varient="outline-primary" href="/games">NBA GAMES</Button>
                    {/*
                     <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/teams">NBA Teams</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/games">NBA Games</Nav.Link>
            </Nav.Item>
            
            </Nav>
                    */}
                    </div>
                    <Router path="/teams" componet={Teams}/>
                    <Router path="/games" componet={Games}/>
                    </Router>
        );
    }
}
export default Button1;