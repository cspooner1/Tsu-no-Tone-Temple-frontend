import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Button, Carousel, Container, Form } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import { useAuth0 } from '@auth0/auth0-react';
import { Row, Col } from 'react-bootstrap';
import About from './About';
import { Router, Routes, Route, Link } from "react-router-dom";

function Homepage() {
    const [workoutData, setWorkoutData] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();



    useEffect(() => {
        async function callApi() {
            let token = await getAccessTokenSilently();
            let headers = {
                Authorization: `Bearer ${token}`
            }
            let workoutResponse = axios.get(`https://training-app-hycg.onrender.com/muscle`)
                .then(function (res) {
                    console.log(res.data);
                    setWorkoutData(res.data);
                })
        }
        callApi();
    }, []
    );

return (
    <>
        <Container id='container'>
                <button onClick={loginWithRedirect} style={{ height: '3rem', width: '12rem', fontFamily: 'fantasy', fontSize: 'large' }}>Login</button>
                <button onClick={logout} style={{ height: '3rem', width: '12rem', fontFamily: 'fantasy', fontSize: 'large' }}>Logout</button>
                <Link to='/about'>
                    <button style={{ height: '3rem', width: '12rem', fontFamily: 'fantasy', fontSize: 'large' }}>About</button>
                </Link>
                <Link to='/anime-workout'>
                <button style={{ height: '3rem', width: '12rem', fontFamily: 'fantasy', fontSize: 'large' }}>Anime Workouts</button>
                </Link>
                <Link to='/workout'>
                <button style={{ height: '3rem', width: '12rem', fontFamily: 'fantasy', fontSize: 'large' }}>Workouts</button>
                </Link>
                <button style={{ height: '3rem', width: '12rem', fontFamily: 'fantasy', fontSize: 'large' }}>$ubscribe</button>
        </Container>
        <h2 id='greeting' style={{ fontFamily: 'fantasy', }}>Kon'nichiwa</h2>
        <Carousel id='items'>
            <Carousel.Item>
                <img
                    src='./images/gokuTraining.gif' className='gifs'
                />
                <Carousel.Caption>
                    <p>Goku</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src='./images/zoroWorkingout.gif' className='gifs'
                />
                <Carousel.Caption>
                    <p>Zoro</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src='./images/dekuTraining.webp' className='gifs'
                />
                <Carousel.Caption>
                    <p>Deku</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src='./images/astaSitups.gif' className='gifs'
                />
                <Carousel.Caption>
                    <p>Asta</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src='./images/rockleeTraining.gif' className='gifs'
                />
                <Carousel.Caption>
                    <p>Rock Lee</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src='./images/vegetaTraining.gif' className='gifs'
                />
                <Carousel.Caption>
                    <p>Vegeta</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src='./images/kenichiTraining.gif' className='gifs'
                />
                <Carousel.Caption>
                    <p>Kenichi</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src='./images/ippoTraining.gif' className='gifs'
                />
                <Carousel.Caption>
                    <p>Ippo</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <h2 id='quoteOne'>"If you knew you had to fight for your life tomorrow, would you change your training today?" ~ Bruce Lee</h2>
        <h2 id='quoteTwo'>"Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend." ~ Bruce Lee</h2>
    </>
);
}

export default Homepage;