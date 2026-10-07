import "./About.css";
function About(){
    return (
        <section className="section about" id="about">
            <div className="container about-inner">
                <div className="about-main">
                    <h2 className="section-title">About me</h2>
                    <p className="about-text">
                        I'm 3rd-year B.Tech (CSE) student at SHEAT College of
                        Engineering, Varanasi. I enjoy turning ideas into working website,
                        and I've spent the last year building projects with te MERN stack.
                    </p>
                    <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">
                        Download resume
                    </a>
                </div>
                <ul className="about-facts">
                    <li>
                        <span className="fact-label">Location</span>
                        <span>Varanasi, India</span>
                    </li>
                    <li>
                        <span className="fact-label">Email</span>
                        <a href="mailto:prakharchaubey0001@gmail.com">prakharchaubey0001@gmail.com</a>
                    </li>
                    <li>
                        <span className="fact-label">GitHub</span>
                        <a href="https://github.com/Prakhar-Chaubey" target="_blank" rel="noreferrer">
                            github.com/Prakhar-Chaubey
                        </a>
                    </li>
                    <li>
                        <span className="fact-label">LinkedIn</span>
                        <a href="https://linkedin.com" taget="_blank" rel="noreferrer">
                            linkedin.com/Prakhar Chaubey
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default About;