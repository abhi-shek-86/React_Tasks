import "./Skills.css"
import HtmlLogo from '../assets/html.png';
import CssLogo from '../assets/Css.png';
import javaScriptLogo from '../assets/js.png';
import FirebaseLogo from '../assets/firbase.png';
import GitLogo from '../assets/Git_icon.svg.png';
import ReactLogo from '../assets/react.png';
import Python from '../assets/python.jpeg';
import SQL from '../assets/sql.png';
import NodeLogo from '../assets/nodejs.png';
import MongoLogo from '../assets/mongodb.png';

export function Skills() {
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div id="skills-container">
                <div id="skill">
                    <img src={HtmlLogo} alt="HTML" />
                    <h3>HTML</h3>
                </div>
                <div id="skill">
                    <img src={CssLogo} alt="CSS" />
                    <h3>CSS</h3>
                </div>
                <div id="skill">
                    <img src={javaScriptLogo} alt="JavaScript" />
                    <h3>JavaScript</h3>
                </div>
                <div id="skill">
                    <img src={FirebaseLogo} alt="Firebase" />
                    <h3>Firebase</h3>
                </div>
                <div id="skill">
                    <img src={GitLogo} alt="Git & Github" />
                    <h3>Git & Github</h3>
                </div>
                <div id="skill">
                    <img src={ReactLogo} alt="React" />
                    <h3>React</h3>
                </div>
                <div id="skill">
                    <img src={Python} alt="Python" />
                    <h3>Python</h3>
                </div>
                <div id="skill">
                    <img src={SQL} alt="SQL" />
                    <h3>SQL</h3>
                </div>
                <div id="skill">
                    <img src={NodeLogo} alt="Node.js" />
                    <h3>Node.js</h3>
                </div>
                <div id="skill">
                    <img src={MongoLogo} alt="MongoDB" />
                    <h3>MongoDB</h3>
                </div>
            </div>
        </div>
    )
}
