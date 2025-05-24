import Swal from 'sweetalert2'
import "./Projects.css"
import CountryImg from '../assets/country.png';
import RealImg from '../assets/real.png';
import MoneyImg from '../assets/money.png';
import LanguageImg from '../assets/language.png';
import UberImg from '../assets/uber.png';
import BMICalculatorImg from '../assets/bmi.png';

export function Projects() {
    // SweetAlert handler for Language Translator live demo
    const handleLanguageDemo = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Live Demo Unavailable',
            text: 'The Language Translator live demo is under development while the ML model is being deployed.',
            confirmButtonColor: '#1a237e'
        });
    };

    return(
        <div id="projects">
            <h1>Projects</h1>
            <div id="projects-container">
                {/* Existing Projects */}
                <div className="project">
                    <img src={CountryImg} alt="Country Delight Clone" />
                    <h3>Country Delight Clone</h3>
                    <div className="tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
                    <p>
                        Built a responsive web page for Country Delight using HTML and CSS, with a custom layout showcasing products, plans, and testimonials. Focused on clean design and mobile-friendly user experience.
                    </p>
                    <div id="project-links">
                        <a href="https://abhi-shek-86.github.io/10K_Coders/country_delight/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Country_Delight.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                <div className="project">
                    <img src={RealImg} alt="Real Time Chat Application" />
                    <h3>Real Time Chat Application</h3>
                    <div className="tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Firebase</span>
                    </div>
                    <p>
                        Built a realtime chat application using HTML, CSS, JavaScript, and Firebase, enabling instant messaging with user authentication. Focused on responsive design and smooth user interactions.
                    </p>
                    <div id="project-links">
                        <a href="https://abhi-shek-86.github.io/Real_Time_Chat_Appliaction/realtimeChatApp/public/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Real_Time_Chat_Appliaction.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                <div className="project">
                    <img src={MoneyImg} alt="Money Expenses Calculator" />
                    <h3>Money Expense Calculator</h3>
                    <div className="tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Firebase</span>
                    </div>
                    <p>
                        Developed a Money Expenses Calculator using HTML, CSS, JavaScript, and Firebase for data storage. Enabled users to track expenses with a clean, responsive interface and real-time updates.
                    </p>
                    <div id="project-links">
                        <a href="https://expenses-tracker-wine-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/Expenses_Tracker.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                {/* New Project: Language Translator */}
                <div className="project">
                    <img src={LanguageImg} alt="Language Translator" />
                    <h3>Language Translator</h3>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Machine Learning</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <p>
                        Language Translator is a web platform that translates text between languages, ensuring accurate and efficient communication.
                        
                        
                    </p>
                    <div id="project-links">
                        <a href="#" onClick={handleLanguageDemo}>Live Demo</a>
                        <a href="https://github.com/abhi-shek-86/T20-86.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                {/* New Project: Uber Clone */}
                <div className="project">
                    <img src={UberImg} alt="Uber Clone" />
                    <h3>Uber Clone</h3>
                    <div className="tech-stack">
                        <span>React</span>
                        <span>Tailwind</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                    <p>
                        Uber Clone is a web platform that seamlessly connects passengers with drivers, ensuring a smooth, reliable, and efficient ride-booking experience with minimal effort, hassle, and maximum convenience.
                    </p>
                    <div id="project-links">
                        <a href="https://uber-clone-fawn-chi.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/uber_clone.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                {/* New Project: BMI Calculator */}
                <div className="project">
                    <img src={BMICalculatorImg} alt="BMI Calculator" />
                    <h3>BMI Calculator</h3>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <p>
                        BMI Calculator is a web platform that computes Body Mass Index using height and weight, providing quick and accurate health insights. It helps users assess their fitness levels effectively.
                    </p>
                    <div id="project-links">
                        <a href="https://bmi-calculator-eight-psi.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/abhi-shek-86/BMI_Calculator.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}