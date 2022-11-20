import React from "react";
import './about.css';
import Doctor from '../../Images/undraw_progressive_app_m-9-ms (1).svg';

const About = () => {
    return (
        <div>
            <div className="AboutPage" id="about-link">
                    <section
                        class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start" className="herosec"
                    >
                        <div class="container">
                            <div class="d-sm-flex align-items-center justify-content-between">
                            <div class="container">
                                <h3 class="mt-5" style={{color:'#395144'}}> About Us</h3>
                                <p class="lead my-3 servicedesc text-dark" style={{ fontWeight: '200' , color: 'white', textAlign:'justify'}}>
                                Our specialty is designing, delivering and supporting IT solutions that help our clients grow. We have an ethical framework that supports our activities. We're socially engaged and always willing to help. 
                                <br /> Our goal is to facilitate your company’s rapid growth in a manner that respects what you have already achieved. In doing so, we aim to stay true to our ethical framework and values. 
                                <br /> We have an agile and people oriented philosophy. For our clients this means that we provide flexible resourcing with a consistent quality of work.
                                    
                                </p>
                                <button
                                class="btn btn-sm rounded-pill mt-2 my-4 text-dark border shadow-sm" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                onClick={() => {
                                const anchor = document.querySelector('#contact-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}
                                >
                                &nbsp;Let's talk &nbsp;&nbsp;&nbsp; <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                                </button>
                            </div>
                            <img
                                class="img-fluid w-50 d-sm-block d-none p-2"
                                src={Doctor}
                                alt=""
                            > 
                            </img>
                            </div>
                        </div>
                    </section>
                </div>
        </div>
    )
}

export default About