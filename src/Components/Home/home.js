import React from "react";
import './home.css';
import Jumbochange from '../../Images/undraw_maker_launch_re_rq81.svg';

const Home = () => {
    return (
        <div>
            <div className="HomePage">
                    <section
                        class="bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start" className="herosec"
                    >
                        <div class="container">
                            <div class="d-sm-flex align-items-center justify-content-between">
                            <img
                                class="img-fluid w-50 d-sm-block mt-5 my-5 p-2"
                                src={Jumbochange}
                                alt=""
                            > 
                            </img> 
                           
                            <div class="container pb-2">
                                <p class="my-3" style={{ color:'#A8E890'}}>
                                    <h5>Based in Warsaw </h5>
                                </p>
                                <h1 class="display-5" style={{ fontWeight: '400', color:'#395144'}}><strong> We build startups <br/> from scratch</strong> </h1>
                                <p class="my-3" style={{ color:'black', fontWeight: '400'}}>
                                    We build startups that lasts. 
                                </p>
                                <button
                                class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border shadow-sm" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                onClick={() => {
                                const anchor = document.querySelector('#about-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>
                                &nbsp;Explore &nbsp;&nbsp;&nbsp; <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                                </button>
                                
                            </div>
                            </div>
                        </div>
                        
                    </section>
                </div>
        </div>
    )
}

export default Home;