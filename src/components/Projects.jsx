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
                    <p>Blazzer is a web application that allows users to create and manage their own online store. It provides a user-friendly interface for adding products, managing inventory, and processing orders.</p>
                    <div id="project-links">
                        <a href="https://abhi-shek-86.github.io/10K_Coders/country_delight/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Country_Delight.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                <div className="project">
                    <img src={RealImg} alt="Real Time Chat Application" />
                    <h3>Real Time Chat Application</h3>
                    <p>Blazzer is a web application that allows users to create and manage their own online store. It provides a user-friendly interface for adding products, managing inventory, and processing orders.</p>
                    <div id="project-links">
                        <a href="https://abhi-shek-86.github.io/Real_Time_Chat_Appliaction/realtimeChatApp/public/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Real_Time_Chat_Appliaction.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                <div className="project">
                    <img src={MoneyImg} alt="Money Expenses Calculator" />
                    <h3>Money Expenes Calculator</h3>
                    <p>Blazzer is a web application that allows users to create and manage their own online store. It provides a user-friendly interface for adding products, managing inventory, and processing orders.</p>
                    <div id="project-links">
                        <a href="https://expenses-tracker-wine-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Expenses_Tracker.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}