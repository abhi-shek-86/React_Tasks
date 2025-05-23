import "./Projects.css"
import CountryImg from '../assets/country.png';
import RealImg from '../assets/real.png';
import MoneyImg from '../assets/money.png';

export function Projects() {
    return(
        <div id="projects">
            <h1>Projects</h1>
            <div id="projects-container">
                <div className="project">
                    <img src={CountryImg} alt="Country Delight Clone" />
                    <h3>Country Delight Clone</h3>
                    <p>Built a responsive web page for Country Delight using HTML and CSS, with a custom layout showcasing products, plans, and testimonials. Focused on clean design and mobile-friendly user experience.</p>
                    <div id="project-links">
                        <a href="https://abhi-shek-86.github.io/10K_Coders/country_delight/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Country_Delight.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                <div className="project">
                    <img src={RealImg} alt="Real Time Chat Application" />
                    <h3>Real Time Chat Application</h3>
                    <p>Built a realtime chat application using HTML, CSS, JavaScript, and Firebase, enabling instant messaging with user authentication. Focused on responsive design and smooth user interactions.</p>
                    <div id="project-links">
                        <a href="https://abhi-shek-86.github.io/Real_Time_Chat_Appliaction/realtimeChatApp/public/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Real_Time_Chat_Appliaction.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                <div className="project">
                    <img src={MoneyImg} alt="Money Expenses Calculator" />
                    <h3>Money Expenes Calculator</h3>
                    <p>Developed a Money Expenses Calculator using HTML, CSS, JavaScript, and Firebase for data storage. Enabled users to track expenses with a clean, responsive interface and real-time updates.







</p>
                    <div id="project-links">
                        <a href="https://expenses-tracker-wine-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Expenses_Tracker.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}