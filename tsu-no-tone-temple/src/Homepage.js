import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Button, Carousel, Container, Form } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';
import {Row, Col} from 'react-bootstrap'

function Homepage() {
    const [workoutData, setWorkoutData] = useState([]);
    const {getAccessTokenSilently} =useAuth0();
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

    useEffect(() => {
        async function callApi() {
            let token = await getAccessTokenSilently();
            let headers = {
                Authorization : `Bearer ${token}`
            }
            let workoutResponse = axios.get(`https://training-app-hycg.onrender.com/`)
            .then(function (res) {
                console.log(res.data);
                setWorkoutData(res.data);
            })
        }
        callApi();
    }, []
    )

    return (
        <>
            <Container id='container'>
                <button onClick={loginWithRedirect} style={{height:'3rem', width:'12rem', fontFamily:'fantasy', fontSize:'large'}}>Login</button>
                <button onClick={logout} style={{height:'3rem', width:'12rem', fontFamily:'fantasy', fontSize:'large'}}>Logout</button>
                <button style={{height:'3rem', width:'12rem', fontFamily:'fantasy', fontSize:'large'}}>About</button>
                <button style={{height:'3rem', width:'12rem', fontFamily:'fantasy', fontSize:'large'}}>Anime Workouts</button>
                <button style={{height:'3rem', width:'12rem', fontFamily:'fantasy', fontSize:'large'}}>Workouts</button>
            </Container>
            <h2 id='greeting' style={{ fontFamily: 'fantasy', }}>Kon'nichiwa</h2>
            <Carousel id='items'>
            <Carousel.Item>
                <img 
                // className='workoutCar'
                src='./images/gokuTraining.gif'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                // className='workoutCar'
                src='./images/zoroWorkingout.gif'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                // className='workoutCar'
                src='./images/dekuTraining.webp'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                // className='workoutCar'
                src='./images/astaSitups.gif'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                // className='workoutCar'
                src='./images/rockleeTraining.gif'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                // className='workoutCar'
                src='./images/vegetaTraining.gif'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                // className='workoutCar'
                src='./images/kenichiTraining.webp'
                />
            </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Homepage;