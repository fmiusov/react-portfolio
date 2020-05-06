import React from 'react';
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <div className="container">
            <main className="row">
                <div className="col-md-8">
                    <article className="block">
                        <h1 className="block-header">Portfolio</h1>
                        <hr />
                        <div id="border1" className="project row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <a href="https://fmiusov.github.io/passwordGenerator/" target="_blank"><img className="img-fluid port-image" src="assets/imgs/PasswordGen_Complete.PNG" alt="password generator" /></a>
                                <a className="btn btn-dark text-center" href="https://github.com/fmiusov/passwordGenerator">GitHub Repository</a>
                            </div>
                        </div>
                        <div id="border2" className="project row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <a href="https://fmiusov.github.io/weatherCheck/" target="_blank"><img className="img-fluid port-image" src="assets/imgs/Final_Product2.PNG" alt="weather forecaster" /></a>
                                <a className="btn btn-dark text-center" href="https://github.com/fmiusov/weatherCheck">GitHub Repository</a>
                            </div>
                        </div>
                        <div id="border3" className="project row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <a href="https://nameless-hamlet-80483.herokuapp.com/" target="_blank"><img className="img-fluid port-image" src="assets/imgs/mainss.png" alt="Burger Eater" /></a>
                                <a className="btn btn-dark text-center" href="https://github.com/fmiusov/burgerEater">GitHub Repository</a>
                            </div>
                        </div>
                        <div id="border4" className="project row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <a href="https://github.com/fmiusov/employeeMGMT" target="_blank"><img className="img-fluid port-image" src="assets/imgs/mgmtSS1.png" alt="Employee Management" /></a>
                                <a href="https://github.com/fmiusov/employeeMGMT" target="_blank"><img className="img-fluid port-image" src="assets/imgs/mgmtSS2.png" alt="Employee Management Details" /></a>
                                <a className="btn btn-dark text-center" href="https://github.com/fmiusov/employeeMGMT">GitHub Repository</a>
                            </div>
                        </div>
                        <div id="border5" className="project row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <a href="https://fmiusov.github.io/Rain-or-Shine/" target="_blank"><img className="img-fluid port-image" src="assets/imgs/rain-or-shine.PNG" alt="Rain-Or-Shine" /></a>
                                <a className="btn btn-dark text-center" href="https://github.com/fmiusov/Rain-or-Shine">GitHub Repository</a>
                            </div>
                        </div>
                        <div id="border6" className="project row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <a href="https://github.com/fmiusov/Book-Line-And-Sinker" target="_blank"><img className="img-fluid port-image" src="assets/imgs/blsSS.PNG" alt="Book-Line-And-Sinker" /></a>
                                <a className="btn btn-dark text-center" href="https://github.com/fmiusov/Book-Line-And-Sinker">GitHub Repository</a>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;