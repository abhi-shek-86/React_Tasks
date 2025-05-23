import "./About.css"
import Blazzer from '../assets/Blazzer.jpg';

export function About(){
    return (
        <div id="about">
            <img src={Blazzer} alt="Abhishek Vasamsetti" />
            <div id="about-text">
                <h1>About Me</h1>
                <p>
                    I am a proficient software developer with expertise in JavaScript and specialized knowledge in frameworks such as React and Node.js. I excel at quickly adapting to new technologies and collaborating effectively with clients to deliver efficient, scalable, and user-centric solutions that address real-world challenges. Let’s work together to turn your vision into reality!
                </p>
            </div>
        </div>
    )
}