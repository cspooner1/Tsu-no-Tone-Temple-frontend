import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Container } from "react-bootstrap";

function About() {
    return (
        <Container id='about'>
            <h1>Za Chimu inai za Tera</h1>
            <h2>The Team within the Temple</h2>
            <video controls>
                <source src="./videos/Tsu No Intro.mp4" type="video/mp4"/>
            </video>
                        <h3>Monkey D. Joey</h3>
            <p>Monkey D. Joey is a spirited and adventurous young man hailing from the vibrant world of anime. 
                With his trademark straw hat and infectious smile, Joey captures the essence of a true free spirit. Born into a lineage of legendary pirates, 
                Joey is the epitome of bravery and determination.
                Having sailed across treacherous seas and faced countless adversaries, Joey has honed his skills as a formidable fighter. 
                His agile movements and lightning-fast reflexes make him a force to be reckoned with in combat. 
                Armed with a trusty sword and a devilish grin, he fearlessly takes on any challenge that comes his way.</p>

            <h3>Sello Za Kami</h3>
            <p>Sello Za Kami is an enigmatic and charismatic figure in the anime realm. 
                Possessing an air of mystery and a powerful presence, 
                Sello Za Kami captures the attention of all who encounter him. 
                With his piercing gaze and impeccable style, he commands respect and awe from those around him.
                Born with extraordinary abilities, SelloDaGod is a prodigious mage who wields ancient elemental powers. 
                His mastery over fire, water, earth, and wind allows him to manipulate the very fabric of nature. With each flick of his wrist, he conjures devastating spells that leave his opponents in awe.</p>
                
            <h3>Saji Za Kenkaku</h3>
            <p>
            Saji is a spirited and determined young individual whose journey unfolds in the vibrant world of anime. 
            With his wide-eyed curiosity and a heart full of ambition, Saji embodies the essence of youthful enthusiasm. 
            Despite his tender age, he possesses a resilience and maturity beyond his years.
            Born into humble beginnings, Saji harbors dreams of becoming a skilled swordsman and protecting those dear to him. 
            His unwavering determination pushes him to train tirelessly, honing his skills with every swing of his blade. 
            Saji's unwavering commitment to his craft sets him apart, as he constantly seeks self-improvement and strives for greatness.
            </p>

            <h2>Contact</h2>
            <h4>Sello</h4>
            <ul>
                <li>Number: (901)-273-3589</li>
                <li>Marcel.mk1577@gmail.com</li>
            </ul>
            <h4>Joe</h4><ul>
                <li>Number: (901)-652-9683</li>
                <li>Joel.lewis47@yahoo.com</li>
            </ul>
            <h4>Spooner</h4><ul>
                <li>Number: (225)-264-8495</li>
                <li>Christopherspooner423@gmail.com</li>
            </ul>
            <img src="./images/logo-without-titel.png" style={{background:'rgba(0,0,0,0.5)',}}/>
        </Container>
    )
}

export default About;