import { Card } from "react-bootstrap";

function AnimeWorkout() {
    return(
        <>
        <h1 style={{fontFamily:'fantasy'}}>Workout Like You Favorite Anime Character!!!</h1>
   <Card className="card">
    <h3>Baki</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Baki workout.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
   </Card>
   <Card className="card">
   <h3>Zenitsu, Tanjiro, Inosuke</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Demon Slayer workout.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
   </Card>
   <Card className="card">
    <h3>Ippo</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Ippo workout.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
   </Card>
   <Card className="card">
    <h3>Rock Lee</h3>
    <Card.Body>
        <video controls>
            <source src="./videos/Rock Lee workout.mp4" type="video/mp4"/>
        </video>
    </Card.Body>
    </Card>
   </>
    )
}

export default AnimeWorkout;