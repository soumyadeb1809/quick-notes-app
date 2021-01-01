import React from 'react';
import Card from "../../components/card/Card";
import Nav from "../../components/nav/Nav";

import './home.css'

const Home = () => {
    return(
        <div className="home-container">
            <div className="nav-container">
                <Nav />
            </div>
            <div className="section-container">
                <Card>
                    <center>Section</center>
                </Card>
            </div>
            <div className="notes-container">
                <Card>
                    <center>Notes List</center>
                </Card> 
            </div>
            <div className="editor-container">
                <Card>
                    <center>Note Editor</center>
                </Card>
            </div>
        </div>
    )
}


export default Home;