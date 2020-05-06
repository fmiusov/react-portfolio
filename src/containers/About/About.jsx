import React from "react";
import "./About.css";

const About = () => {
    return (
        <main class="container">
            <section class="row">
                <div class="col-md-8">
                    <article class="block rounded">
                        <h1 id="about-me" class="block-header">About Me</h1>
                        <hr />
                        <img src="assets/imgs/myface.png" alt="" id="about-image" />
                        <p>
                            Coming from a background of art and design as well as commercial insurance,
                            I currently merge my diverse skillset in data and design as a software developer. My primary interests are in web development
                            and data science. Based in Atlanta, I received my
                            education from Georgia Tech and Savannah College of Art and Design.
                        </p>
                        <p>
                            When not at work I enjoy drawing, tinkering with single board computers, and listening to audiobooks (sometimes all at once). If you prefer, feel free to contact me directly at: <br /> <strong>Email: </strong>jaduff20@gmail.com <br /> <strong>Phone: </strong>404.375.6989
                        </p>
                    </article>
                    <a id="resume" class="btn btn-dark" href="assets/imgs/JaysonDuffResume2020 (2).pdf" download>Resume</a>
                    <a id="linkedin" type="button" class="btn btn-dark" href="https://www.linkedin.com/in/jaysonduff/" target="_blank">LinkedIn</a>
                    <a id="github" type="button" class="btn btn-dark" href="https://github.com/fmiusov" target="_blank">GitHub</a>
                </div>
            </section>
        </main >
    );
};

export default About;