import React, { useState } from "react";
import './services.css';
import Manageditimg from '../../Images/manageditservice.svg';
import Mvpimg from '../../Images/mvpimg.svg';
import Productimg from '../../Images/productdesignimg.svg';
import Mobileimg from '../../Images/mobile-development-5e7677b053308d48b9f2d25981125d7f.svg';
import Productmgimg from '../../Images/product-management.svg';
import Webdevimg from '../../Images/web-development-img.svg';

const Services = () => {
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {setIsReadMore(true)};

    const [isReadMore2, setIsReadMore2] = useState(false);
    const toggleReadMore2 = () => {setIsReadMore2(true)};

    const [isReadMore3, setIsReadMore3] = useState(false);
    const toggleReadMore3 = () => {setIsReadMore3(true)};

    const [isReadMore4, setIsReadMore4] = useState(false);
    const toggleReadMore4 = () => {setIsReadMore4(true)};

    const [isReadMore5, setIsReadMore5] = useState(false);
    const toggleReadMore5 = () => {setIsReadMore5(true)};

    const [isReadMore6, setIsReadMore6] = useState(false);
    const toggleReadMore6 = () => {setIsReadMore6(true)};
  
    return (
        <div>
            <div class="container-fluid p-5 ServicesPage">
            <h3 class="text-center" style={{ color:'#395144'}}>Our Services</h3>
            <div class="row pt-2 mt-3 justify-content-center">
                <div class="col-lg-4 mb-2 mt-5">
                <div class="card rounded border-0 shadow">
                    <div class="card-body p-2">
                    <img src={Productimg} alt="" class="img-fluid mx-auto d-block mb-1 pt-2 pb-2 text-left" style={{width: 'auto', height: '100px'}} />
                        <h5 class="p-2">Product Design</h5>
                        <h6 class="p-1 text-muted">A tailor-made Product Design process that meets your needs.</h6>
                        <p class="lead servicedesc p-2">
                        Our mission is to understand and expand your startup’s ecosystem. We offer strategic guidance and hands-on expertise to improve your startup’s presence online.</p>

                        { isReadMore ?  
                            <ul class="list servicedesc lead" style={{textAlign:'justify'}}>
                            <li>We combine digital strategy, UX and design to help clients think beyond the ordinary.</li>
                            <li>We always look at major design trends - technological and societal - that can (and will) affect our clients.</li>
                            <li>We give you a commitment to deliver an outstanding user experience at every touchpoint.</li>
                        </ul>
                        :  <button
                                class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                onClick={toggleReadMore}
                                >
                                &nbsp;Read more  <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                </button> }
                        
                    </div>
                </div>
                </div>
                <div class="col-lg-4 mb-2" id="services-link">
                <div class="card rounded border-0 shadow">
                    <div class="card-body p-2">
                    <img src={Mobileimg} alt="" class="img-fluid mx-auto d-block mb-1 pt-2 pb-2 text-left" style={{width: 'auto', height: '100px'}} />
                        <h5 class="p-2">Mobile Development</h5>
                        <h6 class="p-1 text-muted">Mobile application development with an inspiring design.</h6>
                        <p class="lead servicedesc p-2">
                        Choose the suitable solution What are the types of applications available on mobile?</p>
                        
                        { isReadMore2 ?  
                        <ul class="list servicedesc lead p-3" style={{textAlign:'justify'}}>
                            <li><b>Web Application</b>
                            <ul>
                                <li>A mobile web app is a website that is adapted to look & behave appropriately on mobile devices. <b>RWD </b> (Responsive Web Design) is the common term used for these behaviors. By using HTML & CSS, we can make apps that adapt to the current device size. </li>
                                <li><b>PWA</b> – progressive web app can answer some of these expectations. By extending the browser capabilities, we make offline usage of applications, extended API to device hardware & experience similar to the native one</li>
                            </ul>
                            </li>
                            <li><b>Cross-platform application</b>
                            <ul>
                                <li>We discovered that having separate codebases for applications costs too much, even for big companies. Hence, the solution is to have a single codebase, which can be built as a separate native Android or iOS app. </li>
                                <li><b>React Native</b> – based on React.js, the most popular web framework, React Native allows writing code in an environment familiar to web developers, although rendered elements on the app are pure native. It's our go-to choice to have an app look platform- consistent. Also, it always allows fallback to a pure native solution if necessary.</li>
                            </ul>
                            </li>
                           
                        </ul>
                        :  <button
                                class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                onClick={toggleReadMore2}
                                >
                                &nbsp;Read more  <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                </button> }
                    </div>
                </div>
                </div>
                <div class="col-lg-4 mb-2 mt-5">
                <div class="card rounded border-0 shadow">
                    <div class="card-body p-2">
                        <img src={Webdevimg} alt="" class="img-fluid mx-auto d-block mb-1 pt-2 pb-2 text-left" style={{width: 'auto', height: '100px'}} />
                        <h5 class="p-2">Web Development</h5>
                        <h6 class="p-1 text-muted"> Build products with an experienced web development company.</h6>
                        <p class="lead servicedesc p-2">
                        Start your digital journey by creating smooth and secure web applications with dedicated product teams.</p>
                        
                        { isReadMore3 ?
                        <ul class="list servicedesc lead" style={{textAlign:'justify'}}>
                           <li>Designed to be interactive</li>
                           <li>Build using top technologies</li>
                           <li>Integrated with other systems</li>
                           <li>Easily customizable and scalable</li>
                        </ul>
                        :  <button
                                class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                onClick={toggleReadMore3}
                                >
                                &nbsp;Read more  <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                </button> }
                    </div>
                </div>
                </div>
            </div>

            <div class="row pt-2 mt-5">
                <div class="col-lg-4 mb-2 mt-5">
                <div class="card rounded border-0 shadow">
                    <div class="card-body p-2">
                        <img src={Productmgimg} alt="" class="img-fluid mx-auto d-block mb-1 pt-2 pb-2" style={{width: 'auto', height: '100px'}} />
                        <h5 class="p-2">Product Management</h5>
                        <h6 class="p-1 text-muted"> Is your product suitable for the chosen market? Does it bring the answer to real customer issues?</h6>
                        <p class="lead servicedesc p-2">
                        We created a team of experienced Product Managers that will guide you and challenge your ideas to deliver the greatest value possible at every step through your product life cycle.</p>
                        
                        { isReadMore4 ?
                        <ul class="list servicedesc lead" style={{textAlign:'justify'}}>
                           <li>Value proposition design</li>
                           <li>Business model generation</li>
                           <li>Go to market strategy for digital products</li>
                          
                        </ul>
                        :  <button
                                class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                onClick={toggleReadMore4}
                                >
                                &nbsp;Read more  <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                </button> }
                    </div>
                </div>
                </div>
                <div class="col-lg-4 mb-2">
                <div class="card rounded border-0 shadow">
                    <div class="card-body p-2">
                    <img src={Manageditimg} alt="" class="img-fluid mx-auto d-block mb-1 pt-2 pb-2" style={{width: 'auto', height: '100px'}} />
                        <h5 class="p-2">Managed IT service</h5>
                        <h6 class="p-1 text-muted"> Customizable solutions for reliable IT environment</h6>
                        <p class="lead servicedesc p-2">
                        Our managed IT services let you focus on your business growth while your IT environment is maintained by a trusted technology partner.
                        Our offering includes the following services:</p>
                        
                        { isReadMore5 ?
                        <ul class="list servicedesc lead" style={{textAlign:'left'}}>
                           <li>IT Support - a broad range of comprehensive software support services.</li>
                           <li>Managed Cloud Services - cloud implementation combined with continuous support.</li>
                           <li>Software Rescue Services - application take-on for successful service delivery.</li>
                           
                        </ul>
                        :  <button
                                class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                onClick={toggleReadMore5}
                                >
                                &nbsp;Read more  <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                </button> }
                    </div>
                </div>
                </div>
                <div class="col-lg-4 mb-2 mt-5">
                <div class="card rounded border-0 shadow">
                    <div class="card-body p-2">
                        <img src={Mvpimg} alt="" class="img-fluid mx-auto d-block mb-1 pt-2 pb-2" style={{width: 'auto', height: '100px'}} />
                        <h5 class="p-2">MVP Development</h5>
                        <h6 class="p-1 text-muted"> Kickoff your business with an MVP</h6>
                        <p class="lead servicedesc p-2">
                        MVP is the product of the product discovery process, delivered through the development. It’s the beginning of the journey to a great final product. </p>
                        
                        { isReadMore6 ?
                        <ul class="list servicedesc lead" style={{textAlign:'left'}}>
                           <li>Defining success metrics</li>
                           <li>Quick application launch</li>
                           <li>Market fit testing</li>
                        </ul>
                        :  <button
                                class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                onClick={toggleReadMore6}
                                >
                                &nbsp;Read more  <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                </button> }
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services;