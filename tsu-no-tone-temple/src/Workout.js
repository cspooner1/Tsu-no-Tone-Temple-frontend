import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import './App.css';


function Workout() {
    
    return(
        <>
        <h1 style={{fontFamily:'fantasy'}}>Pick Your Workout</h1>
   <Card className="card">
    <h3>Burpees</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Burpees.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
   </Card>
   <Card className="card">
   <h3>Jumping Jacks</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Jumping Jacks.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
   </Card>
   <Card className="card">
    <h3>Mountain Climbers</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Mountain Climbers.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
   </Card>
   <Card className="card">
    <h3>Push Ups</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Push Ups.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
    </Card>
    <Card className="card">
    <h3>Sit Ups</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Sit Ups.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
   </Card>
   <Card className="card">
    <h3>Squats</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Squats.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
   </Card>
   </>
    )
}

export default Workout; 