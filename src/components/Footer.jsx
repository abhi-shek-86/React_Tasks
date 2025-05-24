import "./Footer.css";

export function Footer() {
    return (
        <footer id="footer">
            <div className="footer-links">
                <a href="https://github.com/abhi-shek-86" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/abhi1325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="mailto:vasamsettiabhi13@gmail.com@gmail.com" aria-label="Mail">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Mail" />
                </a>
            </div>
            <div className="footer-text">
                © {new Date().getFullYear()} Abhishek Vasamsetti. All rights reserved.
            </div>
        </footer>
    );
}